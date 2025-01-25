import React from 'react';
import { Menu, X, ChevronRight, QrCode, ArrowRight, Sparkles, Users, BookOpen, Target, Award, Heart, Flame, Brain } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Hero from './components/Hero';
// import Analytics from './components/Analytics';
function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/axing-avatar.jpg" 
                alt="阿星" 
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-2 text-xl font-bold">阿星火种计划</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-orange-500">关于阿星</a>
              <a href="#mission" className="text-gray-600 hover:text-orange-500">项目使命</a>
              <a href="#features" className="text-gray-600 hover:text-orange-500">计划权益</a>
              <a href="#join" className="text-gray-600 hover:text-orange-500">加入我们</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500">联系方式</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-600">关于阿星</a>
                <a href="#mission" className="text-gray-600">项目使命</a>
                <a href="#features" className="text-gray-600">计划权益</a>
                <a href="#join" className="text-gray-600">加入我们</a>
                <a href="#contact" className="text-gray-600">联系方式</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              传播真理，不问归期
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              火种计划致力于传播真理，找到人类精神的火种，点燃有影响力的IP，
              去影响和引领更多人的精神成长，提升生命境界。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" onClick={scrollToContact} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600">
                立即加入 <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                了解更多
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/meditation.jpg" 
                alt="阿星老师在冥想" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">关于阿星</h2>
              <p className="text-gray-600 mb-6">
                "朋友，你好。我是阿星，曾经的网红校长。现在，我要开启生命的下一段旅程，并且会坚定不移地走下去。"
              </p>
              <p className="text-gray-600 mb-6">
                在过去很长一段时间，我内心一直抗拒做跟"流量"相关的事，想摆脱身上的流量标签。直到遇见那位美国"老中医"，他在跟我做个案时点醒了我，让我不再抗拒使用自己的"天赋"。
              </p>
              <p className="text-gray-600 mb-8">
                现在，我决定将这份"天赋"转化为"传播真理"的生产力。这不是为了赚钱，而是为了给更多人带去生命智慧的成长，帮助他们早日走上觉醒之路。
              </p>
              <div className="mt-6">
                <a 
                  href="https://mp.weixin.qq.com/s/5MItUNQRZLsuu25XD4UmUg?token=966829185&lang=zh_CN" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 inline-flex items-center"
                >
                  阅读更多关于火种计划 <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">项目使命</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-orange-100 rounded-2xl">
                <Flame className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">传播真理</h3>
              <p className="text-gray-600">通过短视频矩阵测试和传播关于"心灵成长"的智慧，包括心理学、佛学、道德经等经典内容。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-orange-100 rounded-2xl">
                <Brain className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">培养火种</h3>
              <p className="text-gray-600">建立一支有信仰的操盘手团队，签约孵化全球各地的心灵成长领域的专家IP。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-orange-100 rounded-2xl">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">点亮世界</h3>
              <p className="text-gray-600">让我们的"火种"遍布全球每一个角落，共同点亮这颗蔚蓝色的星球。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Event Photos */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">计划权益</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <img 
              src="/event-1.jpg" 
              alt="火种计划线下活动" 
              className="rounded-2xl shadow-lg"
            />
            <img 
              src="/event-2.jpg" 
              alt="火种计划线下活动" 
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">IP使用权益</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>阿星IP的肖像权，一年使用权</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>直播和视频内容的切片权益</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>未来卖课带货的分成权益</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">培训支持</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>免费保姆式剪辑培训</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>直播技术培训</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>36位顶尖心灵大师的静心方法</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">线下活动</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>一天的线下大课活动</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Open Day问答互动</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <span>现场拍摄指导</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">加入火种计划</h2>
            <p className="text-xl text-gray-600 mb-12">
              从2025年1月开始，我们将建立一支有信仰的操盘手团队，
              通过传播智慧来修心长智慧，共同为这个世界种下觉醒的种子。
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">火种计划 - ¥1250</h3>
              <p className="text-gray-600 mb-8">
                加入我们，不仅获得完整的运营培训和IP资源，更重要的是一起传播智慧，给众生种下福田。
                正如悉达多所言，传播智慧的功德，远超恒河沙数的布施。
              </p>
              <a 
                href="#contact" 
                onClick={scrollToContact}
                className="inline-block bg-orange-500 text-white py-3 px-8 rounded-md hover:bg-orange-600 transition-colors"
              >
                立即报名
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">联系我们</h2>
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img 
                src="/qrcode.jpg" 
                alt="阿星火种计划公众号" 
                className="w-72 h-72 mx-auto mb-8"
              />
              <p className="text-xl font-semibold mb-3">扫码加入火种计划</p>
              <p className="text-gray-600 text-lg">开启觉醒之旅，传播智慧，共同成长</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/axing-avatar.jpg" 
                  alt="阿星" 
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2 text-xl font-bold">阿星火种计划</span>
              </div>
              <p className="text-gray-400">
                传播真理，不问归期
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">关于阿星</a></li>
                <li><a href="#mission" className="text-gray-400 hover:text-white">项目使命</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white">计划权益</a></li>
                <li><a href="#join" className="text-gray-400 hover:text-white">加入我们</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">加入我们</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <QrCode className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-400">扫码开启觉醒之旅</span>
                </div>
                <p className="text-gray-400">
                  让我们一起传播智慧，点亮心灵，共同成长
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} 阿星火种计划. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;