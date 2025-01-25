export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 左侧 Logo 区域 */}
          <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
            <img 
              src="/avatar.jpg" 
              alt="Logo" 
              className="h-8 w-8 rounded-full"
            />
            <h1 className="ml-3 text-xl font-bold text-gray-900">
              阿星火种计划
            </h1>
          </div>
          
          {/* 右侧导航区域 */}
          <nav className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">关于阿星</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">项目使命</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">计划权益</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">加入我们</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">联系方式</a>
          </nav>
        </div>
      </div>
    </header>
  );
} 