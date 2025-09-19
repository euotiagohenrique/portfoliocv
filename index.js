 // Certification Modals Data
          const certifications = {
               totvs: {
                    title: 'TOTVS Backoffice (Linha RM) - Ferramentas Gerenciais',
                    institution: 'TOTVS - Universidade TOTVS',
                    period: '16 horas - 2025',
                    content: `
                         <h4><i class="fas fa-book"></i> Capacitação Especializada</h4>
                         <ul>
                              <li>Cadastro da visão de dados através de consultas SQL personalizadas</li>
                              <li>Criação e configuração de painel de metas utilizando gráficos gerenciais</li>
                              <li>Desenvolvimento de cubos OLAP e planilhas para análise multidimensional</li>
                              <li>Importação e configuração de objetos gerenciais</li>
                              <li>Formatação avançada de visão de dados e cenários</li>
                              <li>Utilização do TOTVS Compartilhamento para distribuição de relatórios</li>
                              <li>Elaboração de gráficos padrão e Drill Down para análise visual de dados</li>
                              <li>Implementação de RSS para criação e assinatura de canais de dados</li>
                         </ul>
                    `
               },
               sqladvanced: {
                    title: 'Advanced SQL Server Masterclass For Data Analysis',
                    institution: 'Udemy',
                    period: '2024',
                    content: `
                         <h4><i class="fas fa-database"></i> Técnicas Avançadas de SQL Server</h4>
                         <ul>
                              <li>Window Functions para análise avançada de dados</li>
                              <li>CTEs (Common Table Expressions) recursivas</li>
                              <li>Otimização de consultas e análise de planos de execução</li>
                              <li>PIVOT e UNPIVOT para transformação de dados</li>
                              <li>Dynamic SQL para consultas flexíveis</li>
                              <li>Criação de stored procedures complexas</li>
                              <li>Técnicas de indexação e performance tuning</li>
                              <li>Manipulação avançada de strings e datas</li>
                         </ul>
                    `
               },
               sqladmin: {
                    title: 'SQL Server 2019: Do SQL à Administração',
                    institution: 'Udemy',
                    period: '2024',
                    content: `
                         <h4><i class="fas fa-server"></i> Administração Completa do SQL Server</h4>
                         <ul>
                              <li>Instalação e configuração do SQL Server 2019</li>
                              <li>Criação e gerenciamento de bancos de dados</li>
                              <li>Desenvolvimento de consultas SQL do básico ao avançado</li>
                              <li>Criação de relacionamentos e integridade referencial</li>
                              <li>Subconsultas complexas e JOINs avançados</li>
                              <li>Funções matemáticas, de string e data</li>
                              <li>Gerenciamento de usuários e permissões</li>
                              <li>Estratégias de Backup e Restore</li>
                              <li>Manutenção e monitoramento de performance</li>
                         </ul>
                    `
               },
               csharp: {
                    title: 'C# Programação Orientada a Objetos',
                    institution: 'Udemy',
                    period: 'Em andamento',
                    content: `
                         <h4><i class="fas fa-code"></i> Desenvolvimento Avançado em C#</h4>
                         <ul>
                              <li>Conceitos avançados de Programação Orientada a Objetos</li>
                              <li>Princípios SOLID e Design Patterns</li>
                              <li>Criação de soluções flexíveis e testáveis</li>
                              <li>Aplicação de diagramas UML</li>
                              <li>Desenvolvimento com padrão MVC</li>
                              <li>ASP.NET Core para aplicações web</li>
                              <li>Entity Framework Core para acesso a dados</li>
                              <li>LINQ e expressões Lambda</li>
                              <li>Desenvolvimento de APIs RESTful</li>
                              <li>Testes unitários e TDD</li>
                         </ul>
                    `
               }
          };
          
          // Open Certification Modal
          function openCertModal(certId) {
               const cert = certifications[certId];
               if (!cert) return;
               
               const modal = document.getElementById('certModal');
               const modalTitle = document.getElementById('modalTitle');
               const modalBody = document.getElementById('modalBody');
               const modalInstitution = document.getElementById('modalInstitution');
               const modalPeriod = document.getElementById('modalPeriod');
               
               modalTitle.textContent = cert.title;
               modalBody.innerHTML = cert.content;
               modalInstitution.innerHTML = `<i class="fas fa-university"></i> ${cert.institution}`;
               modalPeriod.textContent = cert.period;
               
               modal.classList.add('active');
               document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
          }
          
          // Close Certification Modal
          function closeCertModal() {
               const modal = document.getElementById('certModal');
               modal.classList.remove('active');
               document.body.style.overflow = ''; // Restore scrolling
          }
          
          // Close modal with ESC key
          document.addEventListener('keydown', function(e) {
               if (e.key === 'Escape') {
                    const modal = document.getElementById('certModal');
                    if (modal && modal.classList.contains('active')) {
                         closeCertModal();
                    } else {
                         scrollToTop();
                    }
               }
               if (e.ctrlKey && e.key === 'p') {
                    e.preventDefault();
                    printResume();
               }
          });
 
 // Toggle expand/collapse for timeline items
          function toggleExpand(button) {
               const timelineItem = button.closest('.timeline-item');
               const expandText = button.querySelector('.expand-text');
               
               if (timelineItem.classList.contains('expanded')) {
                    timelineItem.classList.remove('expanded');
                    expandText.textContent = 'Principais Atividades';
               } else {
                    timelineItem.classList.add('expanded');
                    expandText.textContent = 'Ver menos detalhes';
               }
          }

          // Smooth scroll for contact items
          document.querySelectorAll('.contact-item').forEach(item => {
               item.addEventListener('click', function () {
                    const text = this.querySelector('span').textContent;
                    if (text.includes('@')) {
                         window.location.href = 'mailto:' + text;
                    } else if (text.includes('9')) {
                         window.location.href = 'tel:' + text.replace(/\D/g, '');
                    } else if (text.includes('tiagosantosdev')) {
                         window.open('https://linkedin.com/in/tiagosantosdev', '_blank');
                    }
               });
          });
          
          // Auto expand first item on page load (optional)
          document.addEventListener('DOMContentLoaded', function() {
               // Uncomment the line below if you want the first experience to be expanded by default
               // document.querySelector('.timeline-item.expandable')?.classList.add('expanded');
          });

          // Loader
          window.addEventListener('load', function () {
               setTimeout(function () {
                    document.getElementById('loader').classList.add('hidden');
               }, 1000);
          });

          // Tab Navigation
          function showTab(tabName, element) {
               // Hide all tabs
               const tabs = document.querySelectorAll('.tab-content');
               tabs.forEach(tab => {
                    tab.classList.remove('active');
               });

               // Remove active class from all buttons
               const buttons = document.querySelectorAll('.tab');
               buttons.forEach(btn => {
                    btn.classList.remove('active');
               });

               // Show selected tab
               document.getElementById(tabName).classList.add('active');
               element.classList.add('active');

               // Reset animations
               const newTab = document.getElementById(tabName);
               const animatedElements = newTab.querySelectorAll('.section, .timeline-item, .skill-card');
               animatedElements.forEach(el => {
                    el.style.animation = 'none';
                    setTimeout(() => {
                         el.style.animation = '';
                    }, 10);
               });
               
               // NOVO: Fecha todas as experiências expandidas ao mudar de aba
               const expandedItems = document.querySelectorAll('.timeline-item.expanded');
               expandedItems.forEach(item => {
                    item.classList.remove('expanded');
                    const expandBtn = item.querySelector('.expand-btn .expand-text');
                    if (expandBtn) {
                         expandBtn.textContent = 'Ver mais detalhes';
                    }
               });
          }

          // Theme Toggle
          function toggleTheme() {
               document.body.classList.toggle('dark-theme');
               const themeBtn = document.querySelector('.theme-btn i');
               if (document.body.classList.contains('dark-theme')) {
                    themeBtn.classList.remove('fa-moon');
                    themeBtn.classList.add('fa-sun');
                    localStorage.setItem('theme', 'dark');
               } else {
                    themeBtn.classList.remove('fa-sun');
                    themeBtn.classList.add('fa-moon');
                    localStorage.setItem('theme', 'light');
               }
          }

          // Load saved theme
          if (localStorage.getItem('theme') === 'dark') {
               document.body.classList.add('dark-theme');
               document.querySelector('.theme-btn i').classList.remove('fa-moon');
               document.querySelector('.theme-btn i').classList.add('fa-sun');
          }

          // Quick Actions
          function printResume() {
               window.print();
          }

        // function downloadPDF() {
          // try {
          //      // URL correta para download direto do Google Drive
          //      const fileId = '1f1IxeUKYm-d0OEMRUhTgEMDXWJPnqYhG';
          //      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
               
          //      const link = document.createElement('a');
          //      link.href = downloadUrl;
          //      link.download = 'CV_tiagosantosrm.pdf'; // Nome do arquivo para salvar
               
          //      document.body.appendChild(link);
          //      link.click();
          //      document.body.removeChild(link);
               
          //      showDownloadNotification();
          // } catch (error) {
          //      console.error('Erro no download:', error);
          //      // Fallback: abrir em nova aba
          //      window.open(`https://drive.google.com/file/d/1f1IxeUKYm-d0OEMRUhTgEMDXWJPnqYhG/view`, '_blank');
          // }
          // }

          function downloadPDF() {
               try {
                    // Tenta primeiro o arquivo na mesma pasta
                    const link = document.createElement('a');
                    
                    // Se o PDF estiver na mesma pasta que o HTML
                    link.href = '../Curriculo/CV_tiagosantosrm.pdf';
                    
                    // Se o PDF estiver uma pasta acima (descomente se necessário)
                    // link.href = '../CV_tiagosantosrm.pdf';
                    
                    link.download = 'CV_TiagoSantos_2025.pdf';
                    
                    // Verifica se é possível fazer download
                    fetch(link.href, { method: 'HEAD' })
                         .then(response => {
                              if (response.ok) {
                                   // Arquivo encontrado, faz o download
                                   document.body.appendChild(link);
                                   link.click();
                                   document.body.removeChild(link);
                                   showDownloadNotification();
                              } else {
                                   throw new Error('Arquivo não encontrado');
                              }
                         })
                         .catch(error => {
                              // Se não encontrar, tenta abrir em nova aba
                              console.log('Tentando método alternativo...');
                              
                              // Método alternativo: abrir em nova aba
                              const win = window.open('CV_tiagosantosrm.pdf', '_blank');
                              
                              if (!win) {
                                   // Se bloqueado pelo popup blocker
                                   alert('Por favor, permita popups para baixar o PDF ou verifique se o arquivo CV_tiagosantosrm.pdf está na mesma pasta do index.html');
                              } else {
                                   showDownloadNotification();
                              }
                         });
               } catch (e) {
                    // Fallback final
                    window.open('CV_tiagosantosrm.pdf', '_blank');
               }
          }
          
          function showDownloadNotification() {
               // Cria notificação de download
               const notification = document.createElement('div');
               notification.style.cssText = `
                    position: fixed;
                    bottom: 100px;
                    right: 30px;
                    background: linear-gradient(135deg, #4CAF50, #45a049);
                    color: white;
                    padding: 15px 25px;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
                    z-index: 9999;
                    animation: slideInRight 0.5s ease-out;
                    display: flex;
                    align-items: center;
                    gap: 10px;
               `;
               notification.innerHTML = '<i class="fas fa-check-circle"></i> Download iniciado!';
               
               document.body.appendChild(notification);
               
               // Remove após 3 segundos
               setTimeout(() => {
                    notification.style.animation = 'slideOutRight 0.5s ease-out';
                    setTimeout(() => {
                         document.body.removeChild(notification);
                    }, 500);
               }, 3000);
          }
          
          // Adiciona animações para a notificação
          if (!document.querySelector('#notification-styles')) {
               const style = document.createElement('style');
               style.id = 'notification-styles';
               style.textContent = `
                    @keyframes slideInRight {
                         from {
                              transform: translateX(100%);
                              opacity: 0;
                         }
                         to {
                              transform: translateX(0);
                              opacity: 1;
                         }
                    }
                    @keyframes slideOutRight {
                         from {
                              transform: translateX(0);
                              opacity: 1;
                         }
                         to {
                              transform: translateX(100%);
                              opacity: 0;
                         }
                    }
               `;
               document.head.appendChild(style);
          }

          function shareResume() {
               if (navigator.share) {
                    navigator.share({
                         title: 'Currículo - Tiago Santos',
                         text: 'Confira meu currículo profissional',
                         url: window.location.href
                    });
               } else {
                    alert('Link copiado: ' + window.location.href);
               }
          }

          function scrollToTop() {
               window.scrollTo({ top: 0, behavior: 'smooth' });
          }

          // Intersection Observer for animations
          const observerOptions = {
               threshold: 0.1,
               rootMargin: '0px 0px -50px 0px'
          };

          const observer = new IntersectionObserver(function (entries) {
               entries.forEach(entry => {
                    if (entry.isIntersecting) {
                         entry.target.style.animation = '';
                         observer.unobserve(entry.target);
                    }
               });
          }, observerOptions);

          // Observe all animated elements
          document.addEventListener('DOMContentLoaded', function () {
               const animatedElements = document.querySelectorAll('.section, .timeline-item, .skill-card');
               animatedElements.forEach(el => {
                    observer.observe(el);
               });
          });

          // Smooth scroll for contact items
          document.querySelectorAll('.contact-item').forEach(item => {
               item.addEventListener('click', function () {
                    const text = this.querySelector('span').textContent;
                    if (text.includes('@')) {
                         window.location.href = 'mailto:' + text;
                    } else if (text.includes('9')) {
                         window.location.href = 'tel:' + text.replace(/\D/g, '');
                    } else if (text.includes('tiagosantosdev')) {
                         window.open('https://linkedin.com/in/tiagosantosdev', '_blank');
                    }
               });
          });

          // Progress bars animation on scroll
          const progressBars = document.querySelectorAll('.progress-fill');
          const progressObserver = new IntersectionObserver(function (entries) {
               entries.forEach(entry => {
                    if (entry.isIntersecting) {
                         entry.target.style.animation = '';
                         progressObserver.unobserve(entry.target);
                    }
               });
          }, { threshold: 0.5 });

          progressBars.forEach(bar => {
               progressObserver.observe(bar);
          });

          // Dynamic year
          const yearElements = document.querySelectorAll('.current-year');
          yearElements.forEach(el => {
               el.textContent = new Date().getFullYear();
          });

          // Keyboard navigation
          document.addEventListener('keydown', function (e) {
               if (e.key === 'Escape') {
                    scrollToTop();
               }
               if (e.ctrlKey && e.key === 'p') {
                    e.preventDefault();
                    printResume();
               }
          });

          // Add hover effect to skill tags
          document.querySelectorAll('.skill-tag').forEach(tag => {
               tag.addEventListener('click', function () {
                    this.style.transform = 'scale(1.2) rotate(5deg)';
                    setTimeout(() => {
                         this.style.transform = '';
                    }, 300);
               });
          });

          // Parallax effect on header
          window.addEventListener('scroll', function () {
               const scrolled = window.pageYOffset;
               const header = document.querySelector('.header');
               if (header) {
                    header.style.transform = `translateY(${scrolled * 0.5}px)`;
               }
          });