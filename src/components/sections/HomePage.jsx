import { motion } from 'framer-motion';
import { Rocket, Database, Brain, TrendingUp, Award } from 'lucide-react';

const HomePage = ({ setCurrentSection }) => {
  const features = [
    {
      icon: Database,
      title: 'NASA Datasets',
      description: 'Access Kepler, TESS, and NASA Exoplanet Archive data',
      color: 'text-blue-400'
    },
    {
      icon: Brain,
      title: 'AI/ML Models',
      description: 'Train Neural Networks, Random Forest, and CNN algorithms',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analysis',
      description: 'Get instant predictions with confidence scores',
      color: 'text-green-400'
    },
    {
      icon: Award,
      title: 'Advanced Visualizations',
      description: 'Interactive light curves and 3D orbital maps',
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Rocket className="w-20 h-20 text-[var(--nebula-blue)]" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            A World Away
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Hunting for Exoplanets with AI
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Discover distant worlds using cutting-edge machine learning and NASA's open-source datasets. 
            Join the search for planets beyond our solar system.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setCurrentSection('upload')}
              className="px-8 py-3 bg-gradient-to-r from-[var(--nebula-purple)] to-[var(--nebula-blue)] rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Start Exploring
            </button>
            <button
              onClick={() => setCurrentSection('visualization')}
              className="px-8 py-3 glass rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              View Demo
            </button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 hover:bg-white/10 transition-all cursor-pointer group"
              >
                <Icon className={`w-12 h-12 mb-4 ${feature.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">Mission Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--nebula-blue)]">Our Goal</h3>
              <p className="text-gray-300 leading-relaxed">
                Harness the power of artificial intelligence to detect exoplanets using the transit method. 
                By analyzing light curves from NASA's Kepler and TESS missions, we can identify the subtle 
                brightness dips that indicate a planet passing in front of its star.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--nebula-blue)]">How It Works</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--planet-teal)] mt-1">→</span>
                  <span>Upload or select NASA exoplanet datasets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--planet-teal)] mt-1">→</span>
                  <span>Train AI models on light curve patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--planet-teal)] mt-1">→</span>
                  <span>Analyze results with interactive visualizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--planet-teal)] mt-1">→</span>
                  <span>Compare discoveries with known exoplanets</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'Datasets Available', value: '3+' },
            { label: 'ML Algorithms', value: '5+' },
            { label: 'Known Exoplanets', value: '5000+' },
            { label: 'Detection Accuracy', value: '95%+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="glass p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
