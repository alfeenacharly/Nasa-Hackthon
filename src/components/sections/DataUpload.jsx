import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Database, Check, FileText, Loader2 } from 'lucide-react';

const DataUpload = () => {
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const preloadedDatasets = [
    {
      id: 'kepler',
      name: 'Kepler Mission Data',
      description: 'Light curves from NASA\'s Kepler Space Telescope',
      size: '2.3 GB',
      records: '150,000+ stars',
      icon: '🔭'
    },
    {
      id: 'tess',
      name: 'TESS Mission Data',
      description: 'Transiting Exoplanet Survey Satellite observations',
      size: '1.8 GB',
      records: '200,000+ stars',
      icon: '🛰️'
    },
    {
      id: 'archive',
      name: 'NASA Exoplanet Archive',
      description: 'Confirmed exoplanet parameters and metadata',
      size: '450 MB',
      records: '5,500+ exoplanets',
      icon: '📚'
    }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload
      setTimeout(() => {
        setUploadedFile(file);
        setIsUploading(false);
      }, 1500);
    }
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
            Dataset Selection
          </h1>
          <p className="text-gray-400 text-lg">
            Choose a preloaded NASA dataset or upload your own data files
          </p>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-2xl mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Upload className="w-6 h-6 text-[var(--nebula-blue)]" />
            Upload Custom Dataset
          </h2>
          
          <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-[var(--nebula-blue)] transition-colors">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".csv,.json,.fits"
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              {isUploading ? (
                <Loader2 className="w-16 h-16 mx-auto mb-4 text-[var(--nebula-blue)] animate-spin" />
              ) : uploadedFile ? (
                <Check className="w-16 h-16 mx-auto mb-4 text-green-400" />
              ) : (
                <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              )}
              
              <p className="text-xl font-semibold mb-2">
                {uploadedFile ? 'File Uploaded Successfully!' : 'Click to upload or drag and drop'}
              </p>
              <p className="text-gray-400">
                {uploadedFile ? uploadedFile.name : 'CSV, JSON, or FITS files (max 10GB)'}
              </p>
            </label>
          </div>

          {uploadedFile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 glass rounded-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[var(--nebula-blue)]" />
                  <div>
                    <p className="font-semibold">{uploadedFile.name}</p>
                    <p className="text-sm text-gray-400">
                      {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Check className="w-5 h-5 text-green-400" />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Preloaded Datasets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="w-6 h-6 text-[var(--nebula-purple)]" />
            Preloaded NASA Datasets
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {preloadedDatasets.map((dataset, index) => (
              <motion.div
                key={dataset.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedDataset(dataset.id)}
                className={`glass p-6 rounded-xl cursor-pointer transition-all hover:scale-105 ${
                  selectedDataset === dataset.id
                    ? 'border-2 border-[var(--nebula-blue)] bg-white/10'
                    : 'border border-white/10'
                }`}
              >
                <div className="text-4xl mb-4">{dataset.icon}</div>
                <h3 className="text-xl font-bold mb-2">{dataset.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{dataset.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Size:</span>
                    <span className="text-gray-300">{dataset.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Records:</span>
                    <span className="text-gray-300">{dataset.records}</span>
                  </div>
                </div>

                {selectedDataset === dataset.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-4 p-2 bg-[var(--nebula-blue)] rounded-lg text-center font-semibold"
                  >
                    Selected ✓
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Button */}
        {(selectedDataset || uploadedFile) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <button className="px-12 py-4 bg-gradient-to-r from-[var(--nebula-purple)] to-[var(--nebula-blue)] rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Proceed to Model Training →
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DataUpload;
