import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
        <div className="font-display font-bold text-2xl text-black">
          FITNESS TRAINER
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О тренере</a>
          <a href="#results" className="text-gray-700 hover:text-primary transition-colors">Результаты</a>
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white px-6">
          Записаться
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Трансформируй<br />
              свое тело
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Персональные тренировки с гарантией результата. 
              Более 200 успешных трансформаций за 5 лет работы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Начать тренировки
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Посмотреть результаты
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/img/2ce0db22-b1f8-449d-80d1-1dc30886d157.jpg" 
              alt="Персональный тренер"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-4">200+</div>
              <div className="text-xl">Успешных трансформаций</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-4">5</div>
              <div className="text-xl">Лет опыта</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-4">98%</div>
              <div className="text-xl">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-black mb-6">О тренере</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Сертифицированный персональный тренер с 5-летним опытом работы
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8 border-0 shadow-lg">
            <CardContent className="p-0">
              <Icon name="Trophy" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-4">Опыт</h3>
              <p className="text-gray-600">
                5 лет работы с клиентами разного уровня подготовки. 
                Специализация на похудении и наборе мышечной массы.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 border-0 shadow-lg">
            <CardContent className="p-0">
              <Icon name="GraduationCap" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-4">Образование</h3>
              <p className="text-gray-600">
                Высшее физкультурное образование. Сертификаты ACSM, NASM.
                Постоянное обучение новым методикам.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 border-0 shadow-lg">
            <CardContent className="p-0">
              <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-4">Философия</h3>
              <p className="text-gray-600">
                Индивидуальный подход к каждому клиенту. 
                Результат достигается через постоянство и правильную мотивацию.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transformation Showcase */}
      <section id="results" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-black mb-6">Трансформации клиентов</h2>
            <p className="text-xl text-gray-600">Реальные результаты наших тренировок</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <h3 className="font-display text-2xl font-semibold mb-4">ДО</h3>
                <img 
                  src="/img/6f869ae7-dd0f-471f-91b1-e309c4513e72.jpg"
                  alt="До тренировок"
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl font-semibold mb-4">ПОСЛЕ</h3>
                <img 
                  src="/img/b2a2e111-cef0-4e99-a74f-20201a8eb6d3.jpg"
                  alt="После тренировок"
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
              </div>
            </div>
            
            <div className="text-center mt-8">
              <h4 className="font-display text-xl font-semibold mb-2">Анна, 28 лет</h4>
              <p className="text-gray-600 mb-4">
                Результат за 6 месяцев: -15 кг, +20% мышечной массы
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm">
                  Подробнее
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                  Такой же результат
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-black mb-6">Услуги</h2>
          <p className="text-xl text-gray-600">Выберите подходящий формат тренировок</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 border-2 hover:border-primary transition-colors">
            <CardContent className="p-0">
              <Icon name="User" size={48} className="text-primary mb-4" />
              <h3 className="font-display text-2xl font-semibold mb-4">Персональные тренировки</h3>
              <p className="text-gray-600 mb-6">
                Индивидуальная программа, постоянный контроль техники, 
                быстрый результат.
              </p>
              <div className="text-2xl font-bold text-black mb-4">от 3000 ₽</div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Выбрать
              </Button>
            </CardContent>
          </Card>
          
          <Card className="p-8 border-2 hover:border-primary transition-colors">
            <CardContent className="p-0">
              <Icon name="Users" size={48} className="text-primary mb-4" />
              <h3 className="font-display text-2xl font-semibold mb-4">Мини-группы</h3>
              <p className="text-gray-600 mb-6">
                Тренировки в группе до 4 человек. 
                Мотивация и поддержка единомышленников.
              </p>
              <div className="text-2xl font-bold text-black mb-4">от 1500 ₽</div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Выбрать
              </Button>
            </CardContent>
          </Card>
          
          <Card className="p-8 border-2 hover:border-primary transition-colors">
            <CardContent className="p-0">
              <Icon name="Smartphone" size={48} className="text-primary mb-4" />
              <h3 className="font-display text-2xl font-semibold mb-4">Онлайн консультации</h3>
              <p className="text-gray-600 mb-6">
                Программа тренировок и питания, 
                поддержка 24/7 в мессенджере.
              </p>
              <div className="text-2xl font-bold text-black mb-4">от 5000 ₽</div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Выбрать
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Готов изменить свою жизнь?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Запишись на бесплатную консультацию и получи персональную программу тренировок
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Записаться на консультацию
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-display font-bold text-2xl text-black mb-4">
                FITNESS TRAINER
              </div>
              <p className="text-gray-600">
                Персональные тренировки для достижения ваших целей
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-600">
                <p>+7 (999) 123-45-67</p>
                <p>trainer@example.com</p>
                <p>Москва, ул. Спортивная, 1</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-600 hover:text-primary cursor-pointer" />
                <Icon name="MessageCircle" size={24} className="text-gray-600 hover:text-primary cursor-pointer" />
                <Icon name="Youtube" size={24} className="text-gray-600 hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Fitness Trainer. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;