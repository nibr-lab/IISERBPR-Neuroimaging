import { useState } from 'react';
import { Search, Filter, Download, Eye, Calendar, Database, FileText } from 'lucide-react';

interface Dataset {
  id: string;
  title: string;
  studyName: string;
  category: string;
  subjects: number;
  dateAdded: string;
  size: string;
  description: string;
  status: 'Available' | 'Restricted' | 'Pending';
}

const mockDatasets: Dataset[] = [
  {
    id: 'DS001',
    title: 'Alzheimer\'s Disease Neuroimaging Initiative',
    studyName: 'ADNI Phase 3',
    category: 'Neuroimaging',
    subjects: 450,
    dateAdded: '2024-11-15',
    size: '125 GB',
    description: 'Longitudinal MRI and PET imaging data from participants with varying degrees of cognitive impairment.',
    status: 'Available'
  },
  {
    id: 'DS002',
    title: 'Functional Connectivity in Depression',
    studyName: 'MDD-fMRI-2024',
    category: 'fMRI',
    subjects: 180,
    dateAdded: '2024-10-28',
    size: '87 GB',
    description: 'Resting-state and task-based fMRI data examining neural connectivity patterns in major depressive disorder.',
    status: 'Available'
  },
  {
    id: 'DS003',
    title: 'Pediatric Brain Development Study',
    studyName: 'PedBrain-Long',
    category: 'Developmental',
    subjects: 320,
    dateAdded: '2024-09-10',
    size: '210 GB',
    description: 'Multi-modal imaging data tracking brain development in children ages 5-18 years.',
    status: 'Restricted'
  },
  {
    id: 'DS004',
    title: 'Stroke Recovery Outcomes',
    studyName: 'STROKE-REHAB',
    category: 'Clinical',
    subjects: 95,
    dateAdded: '2024-12-01',
    size: '42 GB',
    description: 'Clinical assessments and imaging data tracking motor recovery following ischemic stroke.',
    status: 'Available'
  },
  {
    id: 'DS005',
    title: 'Multiple Sclerosis Progression Markers',
    studyName: 'MS-TRACK',
    category: 'Neuroimaging',
    subjects: 220,
    dateAdded: '2024-08-22',
    size: '156 GB',
    description: 'Longitudinal MRI data with lesion segmentation and clinical disability scores.',
    status: 'Available'
  },
  {
    id: 'DS006',
    title: 'Cognitive Aging and Genetics',
    studyName: 'AGING-GEN',
    category: 'Genetics',
    subjects: 540,
    dateAdded: '2024-07-15',
    size: '68 GB',
    description: 'Genetic data, cognitive assessments, and structural MRI from healthy aging cohort.',
    status: 'Pending'
  }
];

export function DataBrowser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);

  const categories = ['All', 'Neuroimaging', 'fMRI', 'Developmental', 'Clinical', 'Genetics'];

  const filteredDatasets = mockDatasets.filter(dataset => {
    const matchesSearch = dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dataset.studyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dataset.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || dataset.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-gray-800 mb-6">Browse Data Collections</h2>

        {/* Search and Filters */}
        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search datasets, studies, or keywords..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-4">
          Showing {filteredDatasets.length} of {mockDatasets.length} datasets
        </p>

        {/* Dataset List */}
        <div className="space-y-4">
          {filteredDatasets.map(dataset => (
            <div
              key={dataset.id}
              className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-800">{dataset.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      dataset.status === 'Available'
                        ? 'bg-green-100 text-green-700'
                        : dataset.status === 'Restricted'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {dataset.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Study: {dataset.studyName}</p>
                  <p className="text-gray-700 mb-4">{dataset.description}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      <span>{dataset.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{dataset.subjects} subjects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{dataset.dateAdded}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      <span>{dataset.size}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setSelectedDataset(dataset)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
                <button
                  disabled={dataset.status === 'Pending'}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    dataset.status === 'Pending'
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  {dataset.status === 'Restricted' ? 'Request Access' : 'Download'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dataset Detail Modal */}
      {selectedDataset && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-gray-800 mb-2">{selectedDataset.title}</h2>
                  <p className="text-gray-600">Dataset ID: {selectedDataset.id}</p>
                </div>
                <button
                  onClick={() => setSelectedDataset(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-gray-800 mb-2">Description</h3>
                <p className="text-gray-700">{selectedDataset.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-gray-800 mb-2">Study Information</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-gray-600 text-sm">Study Name</dt>
                      <dd className="text-gray-800">{selectedDataset.studyName}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 text-sm">Category</dt>
                      <dd className="text-gray-800">{selectedDataset.category}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 text-sm">Number of Subjects</dt>
                      <dd className="text-gray-800">{selectedDataset.subjects}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="text-gray-800 mb-2">Technical Details</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-gray-600 text-sm">Date Added</dt>
                      <dd className="text-gray-800">{selectedDataset.dateAdded}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 text-sm">Total Size</dt>
                      <dd className="text-gray-800">{selectedDataset.size}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600 text-sm">Status</dt>
                      <dd className="text-gray-800">{selectedDataset.status}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div>
                <h3 className="text-gray-800 mb-2">Data Use Agreement</h3>
                <p className="text-gray-600 text-sm">
                  Access to this dataset requires acceptance of the data use agreement and institutional
                  review board approval. Downloaded data may only be used for approved research purposes.
                </p>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Download Dataset
                </button>
                <button className="px-6 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
