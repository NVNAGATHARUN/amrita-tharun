import streamlit as st
import qiskit
from qiskit import QuantumCircuit, transpile
from qiskit_aer import Aer
from qiskit_aer.noise import NoiseModel, thermal_relaxation_error, depolarizing_error
from qiskit.visualization import plot_bloch_multivector, plot_histogram
from qiskit.quantum_info import Statevector, DensityMatrix
import matplotlib.pyplot as plt
import numpy as np

st.set_page_config(page_title="Quantum Fragility Simulator - Tharun", layout="wide")

st.title("🛡️ Quantum Fragility: The Silent Killer of Information")
st.markdown("""
### [ED-TECH 7 Winning Entry]
This simulator demonstrates why building a quantum computer is so hard. 
Explore how noise destroys single qubits, multi-qubit systems, and see the catastrophic failure of scale.
""")

# Sidebar settings
st.sidebar.header("🎛️ Noise Enviornment")
mode = st.sidebar.radio("Simulation Mode", 
                       ["Single Qubit Decay", 
                        "Entanglement Fragility (2 Qubits)", 
                        "Scalability Stress Test (Large Scale)",
                        "Quantum vs Classical Robustness"])

st.sidebar.divider()
t1 = st.sidebar.slider("Relaxation Time (T1) - μs", 1, 300, 150)
t2 = st.sidebar.slider("Dephasing Time (T2) - μs", 1, 300, 70)
time_delay = st.sidebar.slider("Environmental Exposure (μs)", 0, 200, 20)
gate_error = st.sidebar.slider("Gate Error Rate (%)", 0.0, 10.0, 0.5) / 100.0

# Logic Functions
def run_quantum_sim(n_qubits, is_entangled, t1, t2, delay, error):
    qc = QuantumCircuit(n_qubits)
    if is_entangled:
        qc.h(0)
        qc.cx(0, 1)
    else:
        qc.h(0)
    
    rho = DensityMatrix.from_instruction(qc)
    
    if delay > 0:
        relax_error = thermal_relaxation_error(t1, t2, delay)
        for i in range(n_qubits):
            rho = rho.evolve(relax_error, [i])
    
    if error > 0:
        dep_error = depolarizing_error(error, 1)
        for i in range(n_qubits):
            rho = rho.evolve(dep_error, [i])
            
    return rho

# Modes
if mode == "Single Qubit Decay":
    rho = run_quantum_sim(1, False, t1, t2, time_delay, gate_error)
    
    col1, col2 = st.columns([2, 1])
    with col1:
        st.subheader("🌫️ State Decay Visualization")
        fig = plot_bloch_multivector(rho)
        st.pyplot(fig)
        st.info("Notice how the vector 'shrinks' as you increase the wait time. This represents the qubit losing its identity and becoming a 'Mixed State'.")
    
    with col2:
        st.subheader("📉 Coherence vs Time")
        times = np.linspace(0, max(time_delay, 200), 100)
        coherence = np.exp(-times / t2)
        
        fig_graph, ax = plt.subplots()
        ax.plot(times, coherence, color='#6366f1', lw=3)
        ax.axvline(x=time_delay, color='red', linestyle='--', label='Current Time')
        ax.set_facecolor('#0e1117')
        fig_graph.patch.set_facecolor('#0e1117')
        ax.tick_params(colors='white')
        ax.set_xlabel("Time (μs)", color='white')
        ax.set_ylabel("Coherence (Retention)", color='white')
        st.pyplot(fig_graph)

elif mode == "Entanglement Fragility (2 Qubits)":
    st.subheader("🔗 Entangled State Decay")
    st.write("Entanglement is like a bridge between two qubits. If one qubit interacts with noise, the entire bridge collapses instantly.")
    
    rho = run_quantum_sim(2, True, t1, t2, time_delay, gate_error)
    
    c1, c2 = st.columns(2)
    with c1:
        st.write("Probabilities of Measurements")
        st.pyplot(plot_histogram(rho.probabilities_dict()))
    with c2:
        # Purity check
        purity = 100 * np.real(np.trace(np.matmul(rho.data, rho.data)))
        st.metric("State Purity", f"{purity:.1f}%", delta=f"{purity-100:.1f}%", delta_color="inverse")
        st.write("A Bell state requires **100% Purity**. As the value drops, the qubits are no longer truly entangled.")

elif mode == "Scalability Stress Test (Large Scale)":
    st.subheader("🚀 The Challenge of Scaling")
    st.write("Why don't we have 1,000 qubit computers yet? Because the fragility grows **exponentially** with the number of qubits.")
    
    num_qubits_test = st.slider("Select Number of Qubits", 2, 20, 5)
    
    # Simple model of collective noise
    retention = np.exp(-time_delay / t1)
    system_reliability = (retention ** num_qubits_test) * (1 - gate_error * 10) # Heavy penalty for scale
    
    c1, c2 = st.columns(2)
    with c1:
        st.metric(f"Total System Reliability ({num_qubits_test} Qubits)", f"{max(0, system_reliability * 100):.1f}%")
        st.progress(max(0, system_reliability))
    
    with c2:
        # Chart of Reliability vs Count
        counts = np.arange(1, 21)
        reliability_at_scale = (retention ** counts) * 100
        
        fig_scale, ax = plt.subplots()
        ax.bar(counts, reliability_at_scale, color='#8b5cf6')
        ax.set_facecolor('#0e1117')
        fig_scale.patch.set_facecolor('#0e1117')
        ax.tick_params(colors='white')
        ax.set_xlabel("Number of Qubits", color='white')
        ax.set_ylabel("Success Probability (%)", color='white')
        st.pyplot(fig_scale)
        
    st.error("**The Fragility Wall**: Notice how even with good hardware, once you hit 10-15 qubits, the probability of the whole system working correctly drops to near zero.")

elif mode == "Quantum vs Classical Robustness":
    st.subheader("⚖️ The Robustness Battle")
    
    col1, col2 = st.columns(2)
    with col1:
        st.markdown("#### 🧱 Classical Bit (Standard CPU)")
        st.write("Billions of electrons protect a single bit. It is 'Hardened' against noise.")
        st.image("https://img.icons8.com/wired/64/ffffff/rock.png", width=60)
        st.metric("Survival Time", "Years", "Infinity")
        
    with col2:
        st.markdown("#### 🧼 Quantum Qubit (Tharun's Sim)")
        st.write("A single subatomic property. Everything in the universe wants to destroy it.")
        st.image("https://img.icons8.com/wired/64/ffffff/bubble.png", width=60)
        st.metric("Survival Time", f"{t1} μs", f"-{time_delay} μs", delta_color="inverse")

    st.divider()
    st.info("**Simple Conclusion**: Building a quantum computer is like trying to build a castle out of bubbles in a hurricane.")

st.divider()
st.caption("Developed by Tharun | Aligning with ED-TECH 7 Guidelines")
