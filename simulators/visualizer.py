import streamlit as st
import qiskit
from qiskit import QuantumCircuit, transpile
from qiskit_aer import Aer
from qiskit.visualization import plot_state_city, plot_histogram
import matplotlib.pyplot as plt

st.set_page_config(page_title="Quantum Code Visualizer - Tharun", layout="wide")

st.title("🔮 Quantum Code Visualizer")
st.markdown("Convert your QASM or Qiskit-like descriptions into visual circuits. Created by **Tharun**.")

st.sidebar.header("Input Method")
input_type = st.sidebar.radio("Select Input", ["QASM Code", "Step-by-Step UI"])

if input_type == "QASM Code":
    qasm_input = st.text_area("Paste QASM code here:", value="""OPENQASM 2.0;
include "qelib1.inc";
qreg q[2];
creg c[2];
h q[0];
cx q[0],q[1];
measure q -> c;""", height=300)
    
    try:
        qc = QuantumCircuit.from_qasm_str(qasm_input)
        st.success("QASM parsed successfully!")
    except Exception as e:
        st.error(f"Error parsing QASM: {e}")
        qc = QuantumCircuit(2)
else:
    st.info("The Step-by-Step UI is currently integrated into the Gate Builder.")
    qc = QuantumCircuit(2)

# Display
col1, col2 = st.columns(2)

with col1:
    st.subheader("Circuit")
    fig = qc.draw(output='mpl')
    st.pyplot(fig)

with col2:
    st.subheader("State Visualization")
    backend = Aer.get_backend('statevector_simulator')
    job = backend.run(transpile(qc, backend))
    result = job.result()
    outputstate = result.get_statevector(qc, decimals=3)
    
    fig_city = plot_state_city(outputstate)
    st.pyplot(fig_city)

st.subheader("Execution Histogram")
qc_meas = qc.copy()
if not any(gate[0].name == 'measure' for gate in qc.data):
    qc_meas.measure_all()

backend_sim = Aer.get_backend('qasm_simulator')
job_sim = backend_sim.run(transpile(qc_meas, backend_sim))
counts = job_sim.result().get_counts()
st.pyplot(plot_histogram(counts))
