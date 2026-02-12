# 🌌 Quantum Lens: Personalized Edition (by Tharun)

A premium, interactive quantum computing toolkit built for the **ED-TECH 7** challenge. This project combines a high-performance React frontend with Qiskit-powered Python simulators to teach the fragility of quantum systems.

## 🚀 Quick Start (Local Run)

### 1. Prerequisites
- Node.js (v18+)
- Python (3.10+)

### 2. Run the Website (Frontend)
```bash
# Install NPM dependencies
npm install

# Start the dev server
npm run dev
# The site will be live at http://localhost:5173 (or 5174)
```

### 3. Run the Simulators (Backend)
```bash
# Install Python dependencies
pip install -r simulators/requirements.txt

# Start the Specialty Fragility Simulator (ED-TECH 7 Feature)
python -m streamlit run simulators/fragility_sim.py --server.port 8503

# Start the Gate Builder
python -m streamlit run simulators/gate_builder.py --server.port 8501

# Start the Visualizer
python -m streamlit run simulators/visualizer.py --server.port 8502
```

## 🛠️ How to Share with Friends

### Option A: Same Wi-Fi (The Fast Way)
If your friends are on the same Wi-Fi as you, they can access your site using your **IP Address**.
1. Open terminal and type `ipconfig` (Windows) or `ifconfig` (Mac).
2. Find your "IPv4 Address" (e.g., `192.168.1.15`).
3. Your friends can go to `http://192.168.1.15:5174` in their browsers!

### Option B: Cloud Deployment (The Pro Way)
To get a permanent "Tharun.com" style link:
1. **Frontend**: Push this code to GitHub and connect it to **Netlify** or **Vercel** (it's free!).
2. **Simulators**: Push the `simulators/` folder to GitHub and connect it to **Streamlit Cloud** (free!).
3. **Update Links**: Once deployed, update the URLs in `src/components/Toolkit.tsx`.

## 🛡️ ED-TECH 7 Features
- **Fragility Sim**: Visualize Decoherence and Entanglement decay.
- **Classical Comparison**: See why Quantum is more sensitive than Classical systems.
- **Intuitive Visuals**: Real-time Bloch Spheres and Coherence graphs.

---
Built with ❤️ by **Tharun**
