import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Target, TrendingUp, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ResultsDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const performanceMetrics = {
    accuracy: 95.8,
    precision: 94.2,
    recall: 96.5,
    f1Score: 95.3,
    totalPredictions: 15420,
    exoplanetsDetected: 487,
    falsePositives: 23,
    falseNegatives: 18
  };

  const confusionMatrix = [
    { label: 'True Positive', value: 469, color: '#06ffa5' },
    { label: 'True Negative', value: 14913, color: '#4cc9f0' },
    { label: 'False Positive', value: 23, color: '#ff6b6b' },
    { label: 'False Negative', value: 18, color: '#ffd60a' }
  ];

  const detectionsByType = [
    { type: 'Gas Giant', count: 156, percentage: 32 },
    { type: 'Super-Earth', count: 142, percentage: 29 },
    { type: 'Neptune-like', count: 98, percentage: 20 },
    { type: 'Earth-like', count: 65, percentage: 13 },
    { type: 'Other', count: 26, percentage: 6 }
  ];

  const recentDetections = [
    {
      id: 'KOI-7894',
      confidence: 98.5,
      type: 'Super-Earth',
      status: 'confirmed',
      radius: '1.8 Earth',
      period: '12.4 days'
    },
    {
      id: 'KOI-7895',
      confidence: 96.2,
      type: 'Gas Giant',
      status: 'confirmed',
      radius: '11.2 Earth',
      period: '89.3 days'
    },
    {
      id: 'KOI-7896',
      confidence: 92.1,
      type: 'Earth-like',
      status: 'candidate',
      radius: '1.1 Earth',
      period: '287.5 days'
    },
    {
      id: 'KOI-7897',
      confidence: 87.6,
      type: 'Neptune-like',
      status: 'candidate',
      radius: '3.8 Earth',
      period: '45.2 days'
    },
    {
      id: 'KOI-7898',
      confidence: 75.3,
      type: 'Super-Earth',
      status: 'uncertain',
      radius: '2.1 Earth',
      period: '18.7 days'
    }
  ];

  const COLORS = ['#06ffa5', '#4cc9f0', '#7b2cbf', '#ffd60a', '#ff6b6b'];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />;
      case 'candidate':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      default:
        return <XCircle className="w-5 h-5 text-orange-400" />;
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-green-400';
    if (confidence >= 75) return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Results Dashboard
          </h1>
          <p className="text-gray-400 text-lg">
            Analysis of AI model predictions and performance metrics
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Accuracy', value: `${performanceMetrics.accuracy}%`, icon: Target, color: 'text-green-400' },
            { label: 'Precision', value: `${performanceMetrics.precision}%`, icon: TrendingUp, color: 'text-blue-400' },
            { label: 'Recall', value: `${performanceMetrics.recall}%`, icon: BarChart3, color: 'text-purple-400' },
            { label: 'F1 Score', value: `${performanceMetrics.f1Score}%`, icon: CheckCircle2, color: 'text-yellow-400' }
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <Icon className={`w-8 h-8 mb-3 ${metric.color}`} />
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Confusion Matrix */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Confusion Matrix</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={confusionMatrix}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {confusionMatrix.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(10, 14, 39, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Detections by Type */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Detections by Planet Type</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={detectionsByType}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="type" stroke="#888" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(10, 14, 39, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="count" fill="#7b2cbf">
                  {detectionsByType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Detection Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-6 rounded-2xl mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Detection Statistics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-4xl font-bold text-[var(--planet-teal)] mb-2">
                {performanceMetrics.totalPredictions.toLocaleString()}
              </div>
              <div className="text-gray-400">Total Predictions</div>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-4xl font-bold text-green-400 mb-2">
                {performanceMetrics.exoplanetsDetected}
              </div>
              <div className="text-gray-400">Exoplanets Detected</div>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {((performanceMetrics.exoplanetsDetected / performanceMetrics.totalPredictions) * 100).toFixed(2)}%
              </div>
              <div className="text-gray-400">Detection Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Recent Detections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Detections</h2>
            <div className="flex gap-2">
              {['all', 'confirmed', 'candidate'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFilter === filter
                      ? 'bg-[var(--nebula-purple)] text-white'
                      : 'glass hover:bg-white/10'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">ID</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Confidence</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Radius</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Period</th>
                </tr>
              </thead>
              <tbody>
                {recentDetections
                  .filter(d => selectedFilter === 'all' || d.status === selectedFilter)
                  .map((detection, index) => (
                    <motion.tr
                      key={detection.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-4 font-mono text-[var(--nebula-blue)]">
                        {detection.id}
                      </td>
                      <td className={`py-4 px-4 font-bold ${getConfidenceColor(detection.confidence)}`}>
                        {detection.confidence}%
                      </td>
                      <td className="py-4 px-4">{detection.type}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(detection.status)}
                          <span className="capitalize">{detection.status}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">{detection.radius}</td>
                      <td className="py-4 px-4 text-gray-300">{detection.period}</td>
                    </motion.tr>
                  ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsDashboard;
