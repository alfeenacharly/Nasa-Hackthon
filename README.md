# 🌌 A World Away: Exoplanet Hunter AI

An AI/ML-powered platform for detecting and analyzing exoplanets using NASA's open-source datasets. Built for NASA Space Apps Challenge 2025.

![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.9-646cff?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38bdf8?logo=tailwindcss)

## 🚀 Features

### Core Functionality
- **📊 Dataset Management**
  - Upload custom NASA datasets (CSV, JSON, FITS)
  - Access preloaded Kepler, TESS, and NASA Exoplanet Archive data
  - Dataset preview and statistics

- **🧠 AI/ML Model Training**
  - Multiple algorithm support:
    - Convolutional Neural Networks (CNN)
    - Deep Neural Networks
    - Random Forest
    - LSTM Networks
  - Real-time training progress visualization
  - Adjustable hyperparameters (epochs, batch size, learning rate)

- **📈 Results Dashboard**
  - Detection classifications with confidence scores
  - Performance metrics: Accuracy, Precision, Recall, F1 Score
  - Confusion matrix visualization
  - Detection statistics by planet type
  - Filterable results table

- **🎨 Advanced Visualizations**
  - Interactive light curve viewer
  - 3D orbital visualization (animated)
  - Comparative analysis charts
  - Exoplanet profile cards with detailed parameters

- **💾 Export & Collaboration**
  - Multiple export formats (PDF, CSV, JSON, Images)
  - Shareable result links
  - Leaderboard system
  - Achievement badges

### UI/UX Features
- **🌟 Immersive Space Theme**
  - Animated starfield background
  - Glass morphism design
  - Gradient accents and smooth animations
  - Dark mode optimized

- **📱 Responsive Design**
  - Mobile-friendly navigation
  - Adaptive layouts for all screen sizes
  - Touch-optimized interactions

- **⚡ Performance**
  - Framer Motion animations
  - Recharts data visualization
  - Optimized rendering

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.9
- **Styling:** TailwindCSS 4.1.14
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React
- **Language:** JavaScript (ESNext)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/AbinVarghexe/Nasa-Hackthon.git
cd aimodel

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Usage

1. **Home Dashboard** - Overview of platform capabilities and statistics
2. **Data Upload** - Select or upload NASA exoplanet datasets
3. **Model Training** - Configure and train AI models with visual feedback
4. **Results Dashboard** - Analyze predictions and performance metrics
5. **Visualization Hub** - Explore interactive charts and 3D models
6. **Export & Share** - Save results and share discoveries

## 🌐 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📊 Sections Overview

### 1. Home Page
- Mission overview
- Key features showcase
- Quick statistics
- Call-to-action buttons

### 2. Data Upload
- Drag-and-drop file upload
- Preloaded dataset selection (Kepler, TESS, Archive)
- Dataset information cards

### 3. Model Training
- Algorithm selection interface
- Training controls and configuration
- Real-time progress tracking
- Accuracy and loss charts

### 4. Results Dashboard
- Performance metrics visualization
- Confusion matrix pie chart
- Planet type distribution bar chart
- Recent detections table with filtering

### 5. Visualization Hub
- Light curve analysis with transit detection
- 3D orbital visualization (animated)
- Comparative scatter plots
- Detailed exoplanet profiles

### 6. Export & Share
- Multiple export format options
- Shareable link generation
- Collaboration features
- Community leaderboard

## 🎨 Design System

### Color Palette
```css
--space-dark: #0a0e27
--space-darker: #050816
--nebula-purple: #7b2cbf
--nebula-blue: #4cc9f0
--star-gold: #ffd60a
--planet-teal: #06ffa5
```

### Key Components
- Animated starfield background
- Glass morphism cards
- Gradient text effects
- Responsive navigation
- Interactive charts

## 🔬 Scientific Accuracy

The platform simulates realistic exoplanet detection workflows:
- Transit method light curve analysis
- Orbital mechanics visualization
- Planet classification by type
- Habitable zone identification
- Performance metrics standard to ML classification

## 🤝 Contributing

This project was created for NASA Space Apps Challenge 2025. Contributions, issues, and feature requests are welcome!

## 📄 License

MIT License - feel free to use this project for educational purposes.

## 🙏 Acknowledgments

- NASA Exoplanet Archive
- Kepler Mission Team
- TESS Mission Team
- NASA Space Apps Challenge organizers

---

**Built with ❤️ for NASA Space Apps Challenge 2025**

🌍 Making exoplanet hunting accessible to everyone


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
