import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Radio, 
  BarChart3, 
  Shield, 
  Zap, 
  Bike,
  CheckCircle,
  Clock,
  Wrench,
  Activity,
  Menu,
  X,
  Bluetooth,
  Smartphone,
  Map as MapIcon,
  Scan,
  Database,
  Cpu,
  Signal,
  Battery,
  Eye,
  TrendingUp,
  Users,
  Settings,
  RefreshCw,
  FileText,
  Layers,
  Target,
  Gauge
} from 'lucide-react';

export default function PulseLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar seções visíveis
      Object.keys(sectionRefs.current).forEach(key => {
        const element = sectionRefs.current[key];
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
          setVisibleSections(prev => ({ ...prev, [key]: isVisible }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Bluetooth className="w-10 h-10" />,
      title: "Beacons BLE nRF52810",
      description: "Tecnologia Nordic Semiconductor com baixo consumo de energia e alto desempenho. Cada beacon possui ID único vinculado ao banco de dados.",
      details: "Rastreamento preciso em ambientes fechados com alcance otimizado"
    },
    {
      icon: <MapIcon className="w-10 h-10" />,
      title: "Mapeamento Digital Completo",
      description: "Ferramenta de desenho para criar layout do pátio, definir zonas e subzonas, e posicionar gateways BLE fixos e móveis.",
      details: "Visualização em tempo real e simulação de cobertura de sinal"
    },
    {
      icon: <Signal className="w-10 h-10" />,
      title: "Gateways Inteligentes",
      description: "Captação de sinais RSSI dos beacons para cálculo de posição. Suporte para gateways fixos e móveis (tablets/smartphones).",
      details: "Cobertura adaptável ao tamanho e layout de cada pátio"
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Gestão de Status Automatizada",
      description: "Controle completo do ciclo: PARA_REVISÃO → DISPONÍVEL → EM_MANUTENÇÃO com checklists digitais integrados.",
      details: "Workflow automatizado desde a entrada até a saída das motos"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Backend Inteligente",
      description: "Sistema que processa sinais dos beacons, calcula posições, gerencia status e mantém histórico completo de movimentações.",
      details: "Processamento em tempo real com alta disponibilidade"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Analytics Avançado",
      description: "Dashboard com métricas operacionais, KPIs de performance, tempo médio por subzona e otimização de ocupação.",
      details: "Insights para tomada de decisões baseadas em dados"
    }
  ];

  const zones = [
    { 
      model: "Mottu Sport 110i", 
      icon: <Bike className="w-8 h-8" />,
      description: "Zona dedicada para o modelo Sport 110i com gestão automatizada"
    },
    { 
      model: "Mottu E", 
      icon: <Zap className="w-8 h-8" />,
      description: "Área específica para motos elétricas com monitoramento de bateria"
    },
    { 
      model: "Mottu Pop", 
      icon: <Bike className="w-8 h-8" />,
      description: "Setor otimizado para o modelo Pop com rastreamento preciso"
    },
    { 
      model: "Mottu Sport ESD", 
      icon: <Bike className="w-8 h-8" />,
      description: "Zona especializada para Sport ESD com controle de status"
    }
  ];

  const statuses = [
    { 
      icon: <Clock className="w-8 h-8" />,
      status: "PARA_REVISÃO",
      desc: "Moto que voltou do aluguel e aguarda inspeção completa",
      color: "bg-yellow-500/20 border-yellow-500",
      detail: "Status automático na entrada do pátio"
    },
    { 
      icon: <CheckCircle className="w-8 h-8" />,
      status: "DISPONÍVEL",
      desc: "Moto aprovada na revisão e pronta para novo aluguel",
      color: "bg-green-600/20 border-[#01743A]",
      detail: "Após checklist de aprovação completo"
    },
    { 
      icon: <Wrench className="w-8 h-8" />,
      status: "EM_MANUTENÇÃO",
      desc: "Moto em processo de reparo preventivo ou corretivo",
      color: "bg-red-500/20 border-red-500",
      detail: "Rastreamento do tempo de manutenção"
    }
  ];

  const tecnologias = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "IoT de Ponta",
      items: [
        "Beacons BLE nRF52810 de baixo consumo",
        "Gateways fixos e móveis integrados",
        "Comunicação Bluetooth Low Energy",
        "Processamento distribuído de sinais RSSI"
      ]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Interface Mobile",
      items: [
        "OCR para digitalização de placas",
        "App para funcionários do pátio",
        "Checklists digitais interativos",
        "Scanners móveis com tablets/smartphones"
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Backend Robusto",
      items: [
        "Cálculo de posição por triangulação",
        "Gestão automática de zonas e subzonas",
        "Histórico completo de movimentações",
        "API REST para integrações"
      ]
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Interface Web",
      items: [
        "Mapa digital interativo em tempo real",
        "Dashboard com métricas operacionais",
        "Simulador de cobertura de sinal",
        "Ferramenta de desenho de layout"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Localização Precisa",
      description: "Encontre qualquer moto no pátio em segundos através do mapa digital interativo"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Otimização Operacional",
      description: "Reduza tempo de busca, melhore a organização e aumente a eficiência do pátio"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Controle Total",
      description: "Rastreabilidade completa desde a entrada até a saída de cada veículo"
    },
    {
      icon: <Gauge className="w-10 h-10" />,
      title: "Performance Monitorada",
      description: "Métricas em tempo real para gestão baseada em dados e KPIs"
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: "Workflow Automatizado",
      description: "Status atualizados automaticamente reduzindo erros operacionais"
    },
    {
      icon: <Battery className="w-10 h-10" />,
      title: "Baixo Custo",
      description: "Beacons reutilizáveis com bateria de longa duração e manutenção mínima"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating particles background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-96 h-96 bg-[#01743A] rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#01743A] rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-[#01743A]/30 shadow-lg shadow-[#01743A]/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-[#01743A] p-2 rounded-lg animate-pulse-glow">
              <Radio className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Pulse</span>
              <p className="text-xs text-gray-400">by Mottu</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <a href="#solucao" className="hover:text-[#01743A] transition-colors duration-300">Solução</a>
            <a href="#features" className="hover:text-[#01743A] transition-colors duration-300">Tecnologia</a>
            <a href="#fluxo" className="hover:text-[#01743A] transition-colors duration-300">Fluxo</a>
            <a href="#beneficios" className="hover:text-[#01743A] transition-colors duration-300">Benefícios</a>
            <a href="#dashboard" className="hover:text-[#01743A] transition-colors duration-300">Dashboard</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#01743A] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-[#01743A]/30">
            <nav className="flex flex-col gap-4 px-4 py-6">
              <a href="#solucao" className="hover:text-[#01743A] transition-colors" onClick={() => setMobileMenuOpen(false)}>Solução</a>
              <a href="#features" className="hover:text-[#01743A] transition-colors" onClick={() => setMobileMenuOpen(false)}>Tecnologia</a>
              <a href="#fluxo" className="hover:text-[#01743A] transition-colors" onClick={() => setMobileMenuOpen(false)}>Fluxo</a>
              <a href="#beneficios" className="hover:text-[#01743A] transition-colors" onClick={() => setMobileMenuOpen(false)}>Benefícios</a>
              <a href="#dashboard" className="hover:text-[#01743A] transition-colors" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-[#01743A]/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#01743A]/20 border border-[#01743A] rounded-full px-6 py-3 mb-8 animate-pulse-glow">
              <Zap className="w-5 h-5 text-[#01743A]" />
              <span className="text-sm text-[#01743A] font-semibold">Gestão Inteligente e Integrada de Pátios</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">Solução </span>
              <span className="text-[#01743A] drop-shadow-[0_0_30px_rgba(1,116,58,0.5)]">Pulse</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto">
              Sistema completo de rastreamento e gestão de motos em tempo real com tecnologia IoT, 
              mapeamento digital e automação inteligente para os pátios da Mottu
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Radio className="w-5 h-5 text-[#01743A]" />
                <span>Beacons BLE</span>
              </div>
              <div className="flex items-center gap-2">
                <MapIcon className="w-5 h-5 text-[#01743A]" />
                <span>Mapa em Tempo Real</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#01743A]" />
                <span>Status Automatizado</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#01743A]" />
                <span>Analytics Avançado</span>
              </div>
            </div>
          </div>

          {/* Stats Cards with animations */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: <Bike className="w-12 h-12" />, value: "100%", label: "Rastreamento em Tempo Real" },
              { icon: <Shield className="w-12 h-12" />, value: "4", label: "Zonas Padronizadas por Modelo" },
              { icon: <Activity className="w-12 h-12" />, value: "3", label: "Status Mecânicos Monitorados" },
              { icon: <Bluetooth className="w-12 h-12" />, value: "IoT", label: "Tecnologia BLE Nordic" }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-[#01743A]/20 to-black border-2 border-[#01743A]/50 rounded-xl p-6 hover:border-[#01743A] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#01743A]/30 group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-[#01743A] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-[#01743A] bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que é o Pulse - Explicação detalhada */}
      <section 
        ref={el => sectionRefs.current['intro'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${visibleSections['intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-[#01743A]/10 to-black border border-[#01743A]/30 rounded-2xl p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#01743A] p-4 rounded-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="text-white">O que é o </span>
                <span className="text-[#01743A]">Pulse?</span>
              </h2>
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              O Pulse é uma solução completa desenvolvida para revolucionar a gestão operacional dos pátios da Mottu. 
              Considerando que as motos são o principal ativo da empresa, o sistema combina tecnologia IoT com Beacons BLE, 
              interface web intuitiva, backend inteligente e mapas digitais interativos para otimizar o rastreamento, 
              alocação e gestão de cada veículo em tempo real.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Com o Pulse, gestores têm visibilidade completa de todo o fluxo de motos no pátio, desde a entrada para revisão 
              até a saída para novo aluguel, garantindo eficiência operacional, redução de tempo de busca e controle total 
              sobre o status mecânico de cada veículo. O sistema foi projetado para ser escalável, adaptável a diferentes 
              tamanhos de pátio e de fácil implementação.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section com animações */}
      <section 
        id="features" 
        ref={el => sectionRefs.current['features'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#01743A]/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-[#01743A]">Tecnologias</span> Integradas
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Stack completo com IoT, mapeamento digital, backend inteligente e analytics avançado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className={`bg-gradient-to-br from-[#01743A]/10 to-black border border-[#01743A]/30 rounded-xl p-6 hover:border-[#01743A] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#01743A]/20 group ${visibleSections['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-[#01743A]/20 w-20 h-20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#01743A]/30 transition-all duration-300 group-hover:scale-110">
                  <div className="text-[#01743A]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-3">{feature.description}</p>
                <p className="text-sm text-[#01743A] font-semibold">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias em detalhes */}
      <section 
        ref={el => sectionRefs.current['tech-detail'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['tech-detail'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Stack </span>
              <span className="text-[#01743A]">Tecnológico</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Arquitetura completa do sistema Pulse
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tecnologias.map((tech, idx) => (
              <div 
                key={idx}
                className={`bg-gradient-to-br from-black to-[#01743A]/10 border-2 border-[#01743A]/50 rounded-xl p-8 hover:border-[#01743A] transition-all duration-500 hover:scale-105 ${visibleSections['tech-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (idx % 2 === 0 ? 'translate-x-10' : '-translate-x-10')}`}
                style={{ transitionDelay: `${idx * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#01743A]">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{tech.title}</h3>
                </div>
                <ul className="space-y-3">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#01743A] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Section com animações */}
      <section 
        id="solucao" 
        ref={el => sectionRefs.current['zones'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#01743A]/5 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${visibleSections['zones'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">4 Zonas </span>
              <span className="text-[#01743A]">Padronizadas</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Cada modelo de moto da Mottu possui uma zona dedicada com gestão automatizada de alocação e rastreamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {zones.map((zone, idx) => (
              <div 
                key={idx}
                className={`bg-black border-2 border-[#01743A] rounded-xl p-6 text-center hover:bg-[#01743A]/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#01743A]/40 group ${visibleSections['zones'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                <div className="flex justify-center mb-4 text-[#01743A] group-hover:scale-125 transition-transform duration-300">
                  {zone.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{zone.model}</h3>
                <p className="text-sm text-gray-400">{zone.description}</p>
              </div>
            ))}
          </div>

          {/* Status Cards com mais detalhes */}
          <div className={`bg-gradient-to-br from-[#01743A]/10 to-black border-2 border-[#01743A]/50 rounded-2xl p-8 sm:p-12 transition-all duration-1000 ${visibleSections['zones'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="text-white">3 Subzonas por </span>
              <span className="text-[#01743A]">Status Mecânico</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {statuses.map((item, idx) => (
                <div 
                  key={idx}
                  className={`${item.color} border-2 rounded-xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl group ${visibleSections['zones'] ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${0.5 + idx * 0.15}s` }}
                >
                  <div className="flex justify-center mb-4 group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-2">{item.status}</h4>
                  <p className="text-sm text-gray-300 mb-3">{item.desc}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cadastro e Mapeamento */}
      <section 
        ref={el => sectionRefs.current['mapping'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['mapping'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-[#01743A]">Cadastro</span> e Mapeamento Digital
            </h2>
            <p className="text-gray-400 text-lg">
              Ferramenta completa para desenho e configuração do seu pátio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className={`bg-gradient-to-br from-[#01743A]/10 to-black border border-[#01743A]/30 rounded-xl p-8 transition-all duration-1000 hover:border-[#01743A] ${visibleSections['mapping'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-10 h-10 text-[#01743A]" />
                <h3 className="text-2xl font-bold">Cadastro do Pátio</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#01743A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Nome e Localização</p>
                    <p className="text-sm text-gray-400">Identificação única e geolocalização do pátio</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="w-6 h-6 text-[#01743A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Área e Capacidade</p>
                    <p className="text-sm text-gray-400">Definição de metragem total e número de motos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Settings className="w-6 h-6 text-[#01743A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Layout Físico Geral</p>
                    <p className="text-sm text-gray-400">Estrutura e organização do espaço disponível</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={`bg-gradient-to-br from-[#01743A]/10 to-black border border-[#01743A]/30 rounded-xl p-8 transition-all duration-1000 hover:border-[#01743A] ${visibleSections['mapping'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex items-center gap-3 mb-6">
                <MapIcon className="w-10 h-10 text-[#01743A]" />
                <h3 className="text-2xl font-bold">Ferramenta de Desenho</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Scan className="w-6 h-6 text-[#01743A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Desenho do Contorno</p>
                    <p className="text-sm text-gray-400">Mapeamento preciso das áreas e limites físicos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-[#01743A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Criação de 4 Zonas</p>
                    <p className="text-sm text-gray-400">Zonas padronizadas por modelo de moto</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="w-6 h-6 text-[#01743A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Configuração de Subzonas</p>
                    <p className="text-sm text-gray-400">Divisão por status: Revisão, Disponível, Manutenção</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Signal className="w-6 h-6 text-[#01743A] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Posicionamento de Gateways</p>
                    <p className="text-sm text-gray-400">Gateways fixos e móveis com simulação de cobertura</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={`mt-8 bg-gradient-to-r from-[#01743A]/20 to-black border-2 border-[#01743A] rounded-xl p-8 transition-all duration-1000 ${visibleSections['mapping'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-[#01743A] p-4 rounded-xl">
                <Eye className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold mb-2">Simulação de Cobertura</h4>
                <p className="text-gray-300">
                  O mapa digital permite simular sinais BLE antes da instalação física, visualizando áreas de cobertura, 
                  pontos cegos e intensidade do sinal de cada gateway. Isso garante uma instalação otimizada e 
                  rastreamento preciso desde o primeiro dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section com mais detalhes e animações */}
      <section 
        id="fluxo" 
        ref={el => sectionRefs.current['flow'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#01743A]/5 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${visibleSections['flow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-[#01743A]">Fluxo</span> Operacional Completo
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Entrada */}
            <div className={`bg-gradient-to-br from-[#01743A]/10 to-black border-2 border-[#01743A]/50 rounded-xl p-8 transition-all duration-1000 hover:border-[#01743A] hover:scale-105 ${visibleSections['flow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#01743A] p-3 rounded-lg">
                  <Scan className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Entrada de Motos</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#01743A] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <h4 className="font-bold">Identificação da Moto</h4>
                  </div>
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start gap-2">
                      <Smartphone className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Digitalização automática via OCR com câmera do celular</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Ou digitação manual da placa para casos especiais</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#01743A] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <h4 className="font-bold">Associação do Beacon</h4>
                  </div>
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start gap-2">
                      <Bluetooth className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Sistema seleciona beacon disponível do estoque</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Database className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Vinculação automática beacon-moto no banco de dados</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#01743A] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <h4 className="font-bold">Status e Alocação Automática</h4>
                  </div>
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Moto marcada automaticamente como PARA_REVISÃO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Sistema calcula e aloca na zona e subzona corretas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Saída */}
            <div className={`bg-gradient-to-br from-[#01743A]/10 to-black border-2 border-[#01743A]/50 rounded-xl p-8 transition-all duration-1000 hover:border-[#01743A] hover:scale-105 ${visibleSections['flow'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#01743A] p-3 rounded-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Saída de Motos</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#01743A] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <h4 className="font-bold">Verificação de Status</h4>
                  </div>
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Confirmação que moto está com status DISPONÍVEL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Bloqueio de saída se moto estiver em revisão ou manutenção</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#01743A] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <h4 className="font-bold">Desvinculação do Beacon</h4>
                  </div>
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start gap-2">
                      <Bluetooth className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Beacon é desvinculado da moto no sistema</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <RefreshCw className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Beacon retorna ao estoque para reutilização</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#01743A] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <h4 className="font-bold">Registro e Rastreabilidade</h4>
                  </div>
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start gap-2">
                      <Activity className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Moto marcada como EM_USO no sistema</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart3 className="w-5 h-5 text-[#01743A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">Registro completo: hora, funcionário e histórico</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Gestão de Status */}
          <div className={`bg-gradient-to-r from-[#01743A]/20 to-black border-2 border-[#01743A] rounded-xl p-8 transition-all duration-1000 ${visibleSections['flow'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#01743A] p-4 rounded-xl">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Gestão do Status Mecânico</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-6 border border-yellow-500/50">
                <Clock className="w-8 h-8 text-yellow-500 mb-4" />
                <h4 className="font-bold mb-2 text-lg">PARA_REVISÃO</h4>
                <p className="text-sm text-gray-300 mb-4">Status inicial automático quando moto entra no pátio após retorno de aluguel</p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Aguarda inspeção completa</li>
                  <li>• Checklist digital pendente</li>
                  <li>• Bloqueio automático de saída</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-[#01743A]/50">
                <CheckCircle className="w-8 h-8 text-[#01743A] mb-4" />
                <h4 className="font-bold mb-2 text-lg">DISPONÍVEL</h4>
                <p className="text-sm text-gray-300 mb-4">Moto aprovada em todos os itens do checklist e liberada para novo aluguel</p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Todos os checks aprovados</li>
                  <li>• Pronta para alugar</li>
                  <li>• Liberada para saída do pátio</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-red-500/50">
                <Wrench className="w-8 h-8 text-red-500 mb-4" />
                <h4 className="font-bold mb-2 text-lg">EM_MANUTENÇÃO</h4>
                <p className="text-sm text-gray-300 mb-4">Moto necessita de reparos preventivos ou corretivos identificados na revisão</p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li>• Em processo de reparo</li>
                  <li>• Rastreamento de tempo</li>
                  <li>• Bloqueio total de saída</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rastreamento em Tempo Real */}
      <section 
        ref={el => sectionRefs.current['tracking'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['tracking'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Rastreamento</span> em <span className="text-[#01743A]">Tempo Real</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Tecnologia BLE com triangulação de sinal para localização precisa
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 bg-gradient-to-br from-[#01743A]/10 to-black border-2 border-[#01743A]/50 rounded-xl p-8 transition-all duration-1000 hover:border-[#01743A] ${visibleSections['tracking'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Signal className="w-8 h-8 text-[#01743A]" />
                Como Funciona o Rastreamento
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#01743A] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold mb-2">Emissão de Sinais BLE</h4>
                    <p className="text-gray-300 text-sm">Os beacons fixados nas motos emitem sinais Bluetooth Low Energy continuamente com ID único identificador</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#01743A] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold mb-2">Captação por Gateways</h4>
                    <p className="text-gray-300 text-sm">Gateways BLE fixos e móveis captam os sinais e medem a intensidade (RSSI - Received Signal Strength Indicator)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#01743A] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold mb-2">Cálculo de Posição</h4>
                    <p className="text-gray-300 text-sm">Backend processa múltiplos sinais RSSI e calcula posição aproximada da moto através de triangulação</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#01743A] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h4 className="font-bold mb-2">Atualização no Mapa</h4>
                    <p className="text-gray-300 text-sm">Localização é atualizada em tempo real no mapa digital, mostrando zona e subzona exatas da moto</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 ${visibleSections['tracking'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-black to-[#01743A]/20 border border-[#01743A]/50 rounded-xl p-6 hover:border-[#01743A] transition-all">
                <MapIcon className="w-10 h-10 text-[#01743A] mb-4" />
                <h4 className="font-bold mb-2">Pátios Pequenos</h4>
                <p className="text-sm text-gray-300">Um único gateway pode cobrir praticamente toda a área com precisão adequada</p>
              </div>
              <div className="bg-gradient-to-br from-black to-[#01743A]/20 border border-[#01743A]/50 rounded-xl p-6 hover:border-[#01743A] transition-all">
                <Layers className="w-10 h-10 text-[#01743A] mb-4" />
                <h4 className="font-bold mb-2">Pátios Grandes</h4>
                <p className="text-sm text-gray-300">Múltiplos gateways fixos e móveis garantem cobertura completa em layouts irregulares</p>
              </div>
              <div className="bg-gradient-to-br from-black to-[#01743A]/20 border border-[#01743A]/50 rounded-xl p-6 hover:border-[#01743A] transition-all">
                <Eye className="w-10 h-10 text-[#01743A] mb-4" />
                <h4 className="font-bold mb-2">Visualização</h4>
                <p className="text-sm text-gray-300">Mapa exibe posição, intensidade de sinal e identificação de pontos cegos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section 
        id="beneficios" 
        ref={el => sectionRefs.current['benefits'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#01743A]/5 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['benefits'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-[#01743A]">Benefícios</span> da Solução Pulse
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Transforme a gestão do seu pátio com eficiência, controle e otimização operacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className={`bg-gradient-to-br from-[#01743A]/10 to-black border-2 border-[#01743A]/30 rounded-xl p-8 hover:border-[#01743A] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#01743A]/30 group ${visibleSections['benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="text-[#01743A] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section 
        id="dashboard" 
        ref={el => sectionRefs.current['dashboard'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${visibleSections['dashboard'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Dashboard </span>
              <span className="text-[#01743A]">em Tempo Real</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Métricas operacionais, KPIs de performance e insights para tomada de decisões inteligentes baseadas em dados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <BarChart3 className="w-10 h-10" />,
                title: "Quantidade por Modelo",
                desc: "Visualize distribuição de motos por tipo em tempo real",
                details: "Gráficos dinâmicos mostrando Sport 110i, E, Pop e Sport ESD"
              },
              {
                icon: <Activity className="w-10 h-10" />,
                title: "Distribuição por Status",
                desc: "Acompanhe revisão, disponíveis e em manutenção",
                details: "Indicadores visuais de PARA_REVISÃO, DISPONÍVEL e EM_MANUTENÇÃO"
              },
              {
                icon: <Radio className="w-10 h-10" />,
                title: "Estado dos Beacons",
                desc: "Monitoramento de bateria e conectividade em tempo real",
                details: "Alertas automáticos para beacons com bateria baixa ou inativos"
              },
              {
                icon: <MapPin className="w-10 h-10" />,
                title: "Ocupação das Zonas",
                desc: "Performance e otimização de espaço por zona",
                details: "Heatmaps mostrando densidade e utilização de cada área"
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "Histórico de Movimentação",
                desc: "Tempo médio em cada subzona e padrões de fluxo",
                details: "Análise de permanência e gargalos operacionais"
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Rastreabilidade Total",
                desc: "Registro completo de entrada, saída e movimentações",
                details: "Auditoria completa com timestamp e responsável por cada ação"
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "KPIs de Performance",
                desc: "Indicadores de eficiência operacional do pátio",
                details: "Tempo médio de revisão, taxa de disponibilidade e throughput"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Performance por Funcionário",
                desc: "Métricas de produtividade da equipe",
                details: "Revisões por hora, tempo médio de processamento e qualidade"
              },
              {
                icon: <Gauge className="w-10 h-10" />,
                title: "Capacidade vs Ocupação",
                desc: "Utilização real vs capacidade máxima do pátio",
                details: "Projeções e alertas de capacidade próxima ao limite"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`bg-gradient-to-br from-[#01743A]/10 to-black border border-[#01743A]/30 rounded-xl p-6 hover:border-[#01743A] transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#01743A]/20 group ${visibleSections['dashboard'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="text-[#01743A] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
                <p className="text-xs text-[#01743A]">{item.details}</p>
              </div>
            ))}
          </div>

          {/* Dashboard Features */}
          <div className={`bg-gradient-to-r from-[#01743A]/20 to-black border-2 border-[#01743A] rounded-2xl p-8 sm:p-12 transition-all duration-1000 ${visibleSections['dashboard'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.5s' }}>
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="text-white">Funcionalidades do </span>
              <span className="text-[#01743A]">Dashboard</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-[#01743A]" />
                  Visualização em Tempo Real
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#01743A] mt-1 flex-shrink-0" />
                    <span>Atualização automática de dados a cada segundo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#01743A] mt-1 flex-shrink-0" />
                    <span>Gráficos interativos com drill-down para detalhes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#01743A] mt-1 flex-shrink-0" />
                    <span>Filtros por período, modelo, zona e status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#01743A] mt-1 flex-shrink-0" />
                    <span>Exportação de relatórios em PDF e Excel</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-[#01743A]" />
                  Análise e Insights
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#01743A] mt-1 flex-shrink-0" />
                    <span>Identificação automática de gargalos operacionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#01743A] mt-1 flex-shrink-0" />
                    <span>Comparativos históricos e tendências</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#01743A] mt-1 flex-shrink-0" />
                    <span>Alertas inteligentes e notificações proativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#01743A] mt-1 flex-shrink-0" />
                    <span>Sugestões de otimização baseadas em IA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologia Beacon BLE - Detalhes técnicos */}
      <section 
        ref={el => sectionRefs.current['beacon-tech'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#01743A]/5 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['beacon-tech'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Por que </span>
              <span className="text-[#01743A]">Beacons BLE</span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Tecnologia Nordic Semiconductor nRF52810 - A escolha ideal para o Pulse
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-gradient-to-br from-[#01743A]/10 to-black border-2 border-[#01743A]/50 rounded-xl p-8 transition-all duration-1000 hover:border-[#01743A] ${visibleSections['beacon-tech'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#01743A] p-4 rounded-xl">
                  <Battery className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Vantagens Técnicas</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#01743A]" />
                    Baixo Consumo de Energia
                  </h4>
                  <p className="text-sm text-gray-300">Bateria de longa duração (meses a anos) com transmissão contínua e eficiente</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#01743A]" />
                    Alto Desempenho
                  </h4>
                  <p className="text-sm text-gray-300">Processamento rápido e confiável para rastreamento em ambientes fechados</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#01743A]" />
                    Baixo Custo
                  </h4>
                  <p className="text-sm text-gray-300">Investimento reduzido com beacons reutilizáveis e manutenção mínima</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#01743A]" />
                    ID Único por Beacon
                  </h4>
                  <p className="text-sm text-gray-300">Cada beacon possui identificador exclusivo vinculado ao banco de dados</p>
                </div>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-[#01743A]/10 to-black border-2 border-[#01743A]/50 rounded-xl p-8 transition-all duration-1000 hover:border-[#01743A] ${visibleSections['beacon-tech'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#01743A] p-4 rounded-xl">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Estratégia de Uso</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#01743A]" />
                    Uso Exclusivo no Pátio
                  </h4>
                  <p className="text-sm text-gray-300">Beacons são fixados apenas quando a moto está dentro do pátio, evitando extravios</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-[#01743A]" />
                    Reutilização Inteligente
                  </h4>
                  <p className="text-sm text-gray-300">Na saída para aluguel, beacon é desvinculado e retorna ao estoque para nova moto</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Bluetooth className="w-5 h-5 text-[#01743A]" />
                    Economia Operacional
                  </h4>
                  <p className="text-sm text-gray-300">Redução drástica de custos ao evitar perda de beacons fora do ambiente controlado</p>
                </div>
                <div className="bg-black/50 rounded-lg p-4 border border-[#01743A]/30">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#01743A]" />
                    Gestão Simplificada
                  </h4>
                  <p className="text-sm text-gray-300">Pool de beacons gerenciado automaticamente pelo sistema sem intervenção manual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Operacional */}
      <section 
        ref={el => sectionRefs.current['impact'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['impact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-[#01743A]">Impacto</span> Operacional do Pulse
            </h2>
            <p className="text-gray-400 text-lg">
              Resultados tangíveis na gestão e eficiência dos pátios da Mottu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "-80%",
                label: "Tempo de Busca",
                desc: "Localização instantânea via mapa digital",
                color: "from-[#01743A]/20 to-green-900/20"
              },
              {
                metric: "+60%",
                label: "Eficiência Operacional",
                desc: "Workflow automatizado e otimizado",
                color: "from-[#01743A]/20 to-blue-900/20"
              },
              {
                metric: "100%",
                label: "Rastreabilidade",
                desc: "Histórico completo de cada veículo",
                color: "from-[#01743A]/20 to-purple-900/20"
              },
              {
                metric: "-95%",
                label: "Erros de Alocação",
                desc: "Sistema automático elimina erros manuais",
                color: "from-[#01743A]/20 to-red-900/20"
              }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className={`bg-gradient-to-br ${stat.color} border-2 border-[#01743A] rounded-xl p-8 text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#01743A]/40 ${visibleSections['impact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl font-bold mb-2 text-[#01743A]">{stat.metric}</div>
                <div className="text-xl font-bold mb-3">{stat.label}</div>
                <p className="text-sm text-gray-400">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className={`mt-12 bg-gradient-to-r from-[#01743A]/20 to-black border-2 border-[#01743A] rounded-2xl p-12 text-center transition-all duration-1000 ${visibleSections['impact'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.4s' }}>
            <Target className="w-16 h-16 text-[#01743A] mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Transformação Digital dos Pátios Mottu
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              O Pulse representa uma evolução completa na gestão de ativos da Mottu, combinando IoT, 
              automação e inteligência de dados para criar pátios mais eficientes, organizados e lucrativos. 
              Uma solução escalável que cresce junto com a operação da empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section - Carrossel */}
      <section 
        ref={el => sectionRefs.current['team'] = el}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#01743A]/10 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections['team'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Nossa </span>
              <span className="text-[#01743A]">Equipe</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Desenvolvedores responsáveis pela solução Pulse
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Raphael Lamaison Kim",
                rm: "RM557914",
                image: "/raphael.png"
              },
              {
                name: "Gabriela de Sousa Reis",
                rm: "RM558830",
                image: "/gabriela.png"
              },
              {
                name: "Laura Amadeu Soares",
                rm: "RM566690",
                image: "/laura.png"
              }
            ].map((member, idx) => (
              <div 
                key={idx}
                className={`bg-gradient-to-br from-[#01743A]/10 to-black border-2 border-[#01743A]/50 rounded-xl overflow-hidden hover:border-[#01743A] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#01743A]/40 group ${visibleSections['team'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 0.2}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-[#01743A]/20 to-black overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#01743A] font-semibold">{member.rm}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#01743A]/30 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#01743A] p-2 rounded-lg">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-xl">Pulse</span>
                  <p className="text-xs text-gray-400">by Mottu</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Gestão inteligente e integrada de pátios com tecnologia IoT e rastreamento em tempo real.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-[#01743A]">Tecnologias</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-[#01743A] transition-colors cursor-pointer">Beacons BLE nRF52810</li>
                <li className="hover:text-[#01743A] transition-colors cursor-pointer">Mapeamento Digital</li>
                <li className="hover:text-[#01743A] transition-colors cursor-pointer">Backend Inteligente</li>
                <li className="hover:text-[#01743A] transition-colors cursor-pointer">Analytics Avançado</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-[#01743A]">Recursos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-[#01743A] transition-colors cursor-pointer">Documentação Técnica</li>
                <li className="hover:text-[#01743A] transition-colors cursor-pointer">Guia de Implementação</li>
                <li className="hover:text-[#01743A] transition-colors cursor-pointer">Suporte Técnico</li>
                <li className="hover:text-[#01743A] transition-colors cursor-pointer">Central de Ajuda</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#01743A]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Pulse - Mottu. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#01743A] transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-[#01743A] transition-colors">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-[#01743A] transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}