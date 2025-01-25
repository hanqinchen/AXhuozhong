export default function Hero() {
  return (
    <div className="text-center py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
      {/* 主标题 */}
      <h1 className="text-4xl font-bold mb-6">
        传播真理，不问归期
      </h1>
      
      {/* 副标题 */}
      <div className="max-w-3xl mx-auto mb-12 text-gray-600">
        <p>火种计划致力于传播真理，找到人类精神的火种，点燃有影响力的IP，去影响和引领更多人的精神成长，提升生命境界。</p>
      </div>
      
      {/* 按钮组 */}
      <div className="space-x-4">
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
          立即加入
        </button>
        <button className="border border-gray-300 text-gray-600 px-8 py-3 rounded-full hover:border-gray-400 hover:text-gray-900 transition-colors">
          了解更多
        </button>
      </div>
    </div>
  );
} 