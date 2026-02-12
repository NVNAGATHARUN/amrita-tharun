# 🚀 Global Deployment Handbook

Follow these steps to get **Quantum Lens** live on the internet! 🌍

## Step 1: Push to GitHub
I have already initialized your project with Git. Now you just need to put it online:
1. Go to [github.com/new](https://github.com/new) and create a repository named `quantum-lens-tharun`.
2. Copy the **remote URL** (looks like `https://github.com/yourname/quantum-lens-tharun.git`).
3. Run these commands in your terminal:
   ```bash
   git remote add origin YOUR_REMOTE_URL_HERE
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy the Website (Frontend)
1. Go to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
2. Select **"Import from GitHub"** and pick your repo.
3. **Build Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Click **Deploy**! You will get a link like `quantum-lens-tharun.netlify.app`.

## Step 3: Deploy the Simulators (Backends)
Streamlit Cloud is perfect for your Python files:
1. Go to [Streamlit Cloud](https://share.streamlit.io/).
2. Click **"New app"** and select your GitHub repo.
3. **Main file path**: Set this to `simulators/fragility_sim.py`.
4. (Optional) Create two more apps for `gate_builder.py` and `visualizer.py`.
5. Once live, you will get links like `tharun-fragility.streamlit.app`.

## Step 4: Final Connection 🔗
Once you have your live links from Step 2 and 3:
1. Come back to me and I will help you update `Toolkit.tsx` so the buttons on your website point to your real live simulators!

---
**Need help with a specific step? Just let me know!**
