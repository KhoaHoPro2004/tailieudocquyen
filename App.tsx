import React from 'react';
import { FOLDERS, FILES } from './constants';
import FolderItem from './components/FolderItem';
import FileItem from './components/FileItem';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 font-sans text-gray-900">
      <header className="py-8 md:py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">
          Tài liệu độc quyền
        </h1>
        <p className="mt-6 max-w-3xl mx-auto px-4 text-sm md:text-base text-red-700 bg-red-100 border border-red-300 rounded-lg p-3 font-semibold shadow-sm">
          Tài liệu độc quyền dành tặng miễn phí cho các bạn sinh viên, cấm mua bán dưới mọi hình thức.
        </p>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Section: Choose by Major */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 pb-3 border-b-2 border-blue-200 mb-6">
            Chọn theo Ngành
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {FOLDERS.map(folder => (
              <FolderItem key={folder.id} folder={folder} />
            ))}
          </div>
        </section>

        {/* Section: Instructions, Notes, Support */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 pb-3 border-b-2 border-blue-200 mb-6">
            Hướng dẫn, Lưu ý & Ủng hộ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {FILES.map(file => (
              <FileItem key={file.id} file={file} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;