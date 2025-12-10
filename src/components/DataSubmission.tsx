import { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, X } from 'lucide-react';

export function DataSubmission() {
  const [formData, setFormData] = useState({
    studyName: '',
    datasetTitle: '',
    category: '',
    description: '',
    subjects: '',
    irb: '',
    contact: '',
    dataType: [] as string[],
  });

  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const categories = [
    'Neuroimaging',
    'fMRI',
    'PET',
    'Clinical',
    'Genetics',
    'Behavioral',
    'Developmental'
  ];

  const dataTypes = [
    'MRI (T1-weighted)',
    'MRI (T2-weighted)',
    'fMRI (task-based)',
    'fMRI (resting-state)',
    'PET imaging',
    'Clinical assessments',
    'Cognitive tests',
    'Genetic data',
    'Behavioral measures'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDataTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      dataType: prev.dataType.includes(type)
        ? prev.dataType.filter(t => t !== type)
        : [...prev.dataType, type]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('success');
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleFileUpload = () => {
    // Mock file upload
    const newFile = {
      name: `dataset_${uploadedFiles.length + 1}.zip`,
      size: `${Math.floor(Math.random() * 500 + 100)} MB`
    };
    setUploadedFiles(prev => [...prev, newFile]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-green-800">
              Dataset submitted successfully! Your submission will be reviewed by our data team.
            </p>
            <p className="text-green-700 text-sm mt-1">
              You will receive a confirmation email with submission details.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-gray-800 mb-2">Submit New Dataset</h2>
        <p className="text-gray-600 mb-6">
          Upload your research data to the archive. All submissions are reviewed for quality and compliance.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-gray-800 mb-4">Basic Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Study Name *
                  </label>
                  <input
                    type="text"
                    value={formData.studyName}
                    onChange={(e) => handleInputChange('studyName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., BRAIN-2024"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Dataset Title *
                  </label>
                  <input
                    type="text"
                    value={formData.datasetTitle}
                    onChange={(e) => handleInputChange('datasetTitle', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Descriptive title for your dataset"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Number of Subjects *
                  </label>
                  <input
                    type="number"
                    value={formData.subjects}
                    onChange={(e) => handleInputChange('subjects', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 150"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Provide a detailed description of your dataset, including research objectives and methodology..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Data Types */}
          <div>
            <h3 className="text-gray-800 mb-4">Data Types Included</h3>
            <p className="text-gray-600 text-sm mb-3">Select all that apply</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {dataTypes.map(type => (
                <label
                  key={type}
                  className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.dataType.includes(type)}
                    onChange={() => handleDataTypeToggle(type)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-gray-700 text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-gray-800 mb-4">Compliance & Ethics</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  IRB Approval Number *
                </label>
                <input
                  type="text"
                  value={formData.irb}
                  onChange={(e) => handleInputChange('irb', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., IRB-2024-12345"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  value={formData.contact}
                  onChange={(e) => handleInputChange('contact', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="principal.investigator@institution.edu"
                  required
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <p>
                    All data must be de-identified according to HIPAA guidelines. Ensure that no
                    protected health information (PHI) is included in your submission.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <h3 className="text-gray-800 mb-4">Upload Data Files</h3>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-700 mb-2">
                Drag and drop your files here, or click to browse
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Supported formats: ZIP, TAR.GZ (Max size: 10 GB per file)
              </p>
              <button
                type="button"
                onClick={handleFileUpload}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Select Files
              </button>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">Uploaded Files ({uploadedFiles.length})</p>
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-gray-800">{file.name}</p>
                        <p className="text-gray-500 text-sm">{file.size}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Agreement */}
          <div className="border-t border-gray-200 pt-6">
            <label className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                className="rounded border-gray-300 mt-1"
                required
              />
              <span className="text-gray-700 text-sm">
                I certify that this data has been collected in accordance with ethical guidelines,
                has received proper IRB approval, and is properly de-identified. I agree to the
                terms of the data sharing agreement.
              </span>
            </label>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Dataset for Review
              </button>
              <button
                type="button"
                className="px-8 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Save Draft
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
