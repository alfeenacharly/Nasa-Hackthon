import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, FileText, Image, Code, Link2, CheckCircle } from 'lucide-react';

const ExportShare = () => {
  const [exportFormat, setExportFormat] = useState('pdf');
  const [shareLink, setShareLink] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const [exported, setExported] = useState(false);

  const exportFormats = [
    {
      id: 'pdf',
      name: 'PDF Report',
      description: 'Comprehensive analysis report with charts and tables',
      icon: FileText,
      size: '~2.5 MB'
    },
    {
      id: 'csv',
      name: 'CSV Data',
      description: 'Raw detection data in spreadsheet format',
      icon: Code,
      size: '~450 KB'
    },
    {
      id: 'json',
      name: 'JSON Export',
      description: 'Structured data for API integration',
      icon: Code,
      size: '~680 KB'
    },
    {
      id: 'images',
      name: 'Visualization Pack',
      description: 'High-resolution charts and graphs',
      icon: Image,
      size: '~5.8 MB'
    }
  ];

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExported(true);
      setTimeout(() => setExported(false), 3000);
    }, 2000);
  };

  const handleGenerateShareLink = () => {
    const randomId = Math.random().toString(36).substr(2, 9);
    setShareLink(`https://exoplanet-hunter.nasa.gov/share/${randomId}`);
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
            Export & Share
          </h1>
          <p className="text-gray-400 text-lg">
            Save your findings and share discoveries with the community
          </p>
        </motion.div>

        {/* Export Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Download className="w-6 h-6 text-[var(--nebula-blue)]" />
            Export Formats
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {exportFormats.map((format, index) => {
              const Icon = format.icon;
              return (
                <motion.div
                  key={format.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => setExportFormat(format.id)}
                  className={`glass p-6 rounded-xl cursor-pointer transition-all hover:scale-105 ${
                    exportFormat === format.id
                      ? 'border-2 border-[var(--nebula-blue)] bg-white/10'
                      : 'border border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Icon className={`w-12 h-12 ${
                      exportFormat === format.id ? 'text-[var(--nebula-blue)]' : 'text-gray-400'
                    }`} />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{format.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{format.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">File Size: {format.size}</span>
                        {exportFormat === format.id && (
                          <span className="text-[var(--planet-teal)] font-semibold text-sm">
                            Selected ✓
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleExport}
            disabled={isExporting || exported}
            className={`w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
              exported
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-gradient-to-r from-[var(--nebula-purple)] to-[var(--nebula-blue)] hover:shadow-lg hover:shadow-purple-500/50'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {exported ? (
              <>
                <CheckCircle className="w-6 h-6" />
                Exported Successfully!
              </>
            ) : isExporting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Download className="w-6 h-6" />
                </motion.div>
                Exporting...
              </>
            ) : (
              <>
                <Download className="w-6 h-6" />
                Export {exportFormats.find(f => f.id === exportFormat)?.name}
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-8 rounded-2xl mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Share2 className="w-6 h-6 text-[var(--nebula-purple)]" />
            Share Results
          </h2>

          <p className="text-gray-400 mb-6">
            Generate a shareable link to your analysis results and discoveries
          </p>

          <div className="flex gap-4 mb-6">
            <button
              onClick={handleGenerateShareLink}
              className="px-6 py-3 bg-gradient-to-r from-[var(--nebula-purple)] to-[var(--nebula-blue)] rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Generate Share Link
            </button>
          </div>

          {shareLink && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Link2 className="w-5 h-5 text-[var(--planet-teal)]" />
                <span className="font-semibold">Shareable Link Generated</span>
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={shareLink}
                  readOnly
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(shareLink)}
                  className="px-6 py-3 glass rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Copy
                </button>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                This link will remain active for 30 days. Anyone with this link can view your analysis results.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Collaboration Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-6">Collaboration Features</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-lg font-bold mb-2">Leaderboard</h3>
              <p className="text-gray-400 text-sm mb-3">
                Compete with other researchers for detection accuracy
              </p>
              <div className="text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-500">Your Rank:</span>
                  <span className="text-[var(--star-gold)] font-bold">#42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Detections:</span>
                  <span className="text-[var(--planet-teal)] font-bold">487</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <div className="text-4xl mb-3">🎖️</div>
              <h3 className="text-lg font-bold mb-2">Achievements</h3>
              <p className="text-gray-400 text-sm mb-3">
                Earn badges for discoveries and milestones
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs font-semibold">
                  Planet Hunter
                </span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-semibold">
                  AI Astronomer
                </span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-semibold">
                  Data Expert
                </span>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-lg font-bold mb-2">Community Stats</h3>
              <p className="text-gray-400 text-sm mb-3">
                Global platform statistics
              </p>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Users:</span>
                  <span className="font-bold">12,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Discoveries:</span>
                  <span className="font-bold">45,203</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExportShare;
