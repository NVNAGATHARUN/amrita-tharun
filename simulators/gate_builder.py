import streamlit as st
import qiskit
from qiskit import QuantumCircuit, transpile
from qiskit_aer import Aer
from qiskit.visualization import plot_bloch_multivector, plot_histogram
import matplotlib.pyplot as plt
import numpy as np

st.set_page_config(page_title="Quantum Gate Builder - Tharun", layout="wide")

st.title("⚛️ Quantum Gate Builder")
st.markdown("Build your quantum circuit visually and observe the results in real-time. Created by **Tharun**.")

# Sidebar for configuration
st.sidebar.header("Circuit Configuration")
n_qubits = st.sidebar.slider("Number of Qubits", 1, 5, 2)
n_bits = st.sidebar.slider("Number of Classical Bits", 1, 5, 2)

# Initialize circuit
if 'gates' not in st.session_state:
    st.session_state.gates = []

def add_gate(gate_name, qubits):
    st.session_state.gates.append({'name': gate_name, 'qubits': qubits})

# Gate Palette
st.sidebar.header("Gate Palette")
gate_type = st.sidebar.selectbox("Select Gate", ["H", "X", "Y", "Z", "S", "T", "CNOT"])

if gate_type == "CNOT":
    control = st.sidebar.number_input("Control Qubit", 0, n_qubits-1, 0)
    target = st.sidebar.number_input("Target Qubit", 0, n_qubits-1, 1)
    if st.sidebar.button("Add CNOT"):
        add_gate("CNOT", [control, target])
else:
    qubit = st.sidebar.number_input("Qubit Index", 0, n_qubits-1, 0)
    if st.sidebar.button(f"Add {gate_type}"):
        add_gate(gate_type, [qubit])

if st.sidebar.button("Reset Circuit"):
    st.session_state.gates = []
    st.rerun()

# Build Qiskit Circuit
qc = QuantumCircuit(n_qubits, n_bits)

for gate in st.session_state.gates:
    if gate['name'] == "H":
        qc.h(gate['qubits'][0])
    elif gate['name'] == "X":
        qc.x(gate['qubits'][0])
    elif gate['name'] == "Y":
        qc.y(gate['qubits'][0])
    elif gate['name'] == "Z":
        qc.z(gate['qubits'][0])
    elif gate['name'] == "S":
        qc.s(gate['qubits'][0])
    elif gate['name'] == "T":
        qc.t(gate['qubits'][0])
    elif gate['name'] == "CNOT":
        qc.cx(gate['qubits'][0], gate['qubits'][1])

# Display Circuit
st.subheader("Circuit Diagram")
fig_circuit = qc.draw(output='mpl')
st.pyplot(fig_circuit)

# Simulation
st.subheader("Simulation Results")
col1, col2 = st.columns(2)

# Statevector / Bloch Sphere
backend_sv = Aer.get_backend('statevector_simulator')
job_sv = backend_sv.run(transpile(qc, backend_sv))
statevector = job_sv.result().get_statevector()

with col1:
    st.write("Bloch Sphere Representation")
    fig_bloch = plot_bloch_multivector(statevector)
    st.pyplot(fig_bloch)

# Measurement & Histogram
qc_meas = qc.copy()
qc_meas.measure_all()
backend_sim = Aer.get_backend('qasm_simulator')
job_sim = backend_sim.run(transpile(qc_meas, backend_sim), shots=1024)
counts = job_sim.result().get_counts()

with col2:
    st.write("Measurement Probability Histogram")
    fig_hist = plot_histogram(counts)
    st.pyplot(fig_hist)

st.divider()
st.info("Tip: Use the sidebar to add gates and configure your circuit.")
