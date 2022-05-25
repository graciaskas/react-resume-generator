import "../css/main.css";

export default function Resume(props) { 
    return (
        <div className="resume">
            <header>
              <div class="container">
                  <div class="row">
                    
                      <div class="left_side">
                          <div class="row">
                              <div class="h_image">
                                  <img src="./src/i.png" alt="" width="80"/>
                              </div>
                              <div class="h_objectif">
                                  <h1 class="t-white">Gracias Kasongo</h1>
                                  <h3 class="t-white">Informaticien, développeur  web.</h3>
                                  <p class="t-white">Aptitude á développer et á concevoir des logiciels dans des délais contraints. Expérimenté dans le developement de logiciel, l'analyse des besoins du client et le débogage de programmes. Grande curiosité intellectuelle et capacité d'adaptation aux nouvelles évolutions informatiques.</p>
                              </div>
                          </div>
                      </div>
    
                  </div>
              </div>
          </header>
    
          <main>
            <div class="container">
                <div class="row">
                   
                    <div class="side_left">
                        <div class="left_block">
                            <h3 class="t-danger">CONTACT</h3>
                            <p><span class="fa fa-envelope"></span> graciaskas96@gmail.com </p>
                            <p><span class="fa fa-phone"></span> (243) 978 092 058 </p>
                            <p><span class="fa fa-map-marker"></span>N.48, Gombe - Kin </p>
                        </div>
                        <div class="left_block">
                            <h3 class="t-danger upper">Compétences</h3>
                            <p>HTML/XML</p>
                            <p>CSS/SASS/LESS</p>
                            <p>Javascript(Node, React,Next)</p>
                            <p>Python(Django)</p>
                            <p>PHP(Laravel)</p>
                            <p>Git</p>
                            <p>SQL</p>
                            <p>MongoDB</p>
                            <p>Odoo</p>
                            <p>MS Office</p>
                            <p></p>
                            <p>Administration système</p>
                            <p>Linux</p>
                            <p>Analyse des données</p>
                            <p>Responsive web design</p>
                        </div>
                        <div class="left_block">
                            <h3 class="t-danger upper">LANGUAGES</h3>
                            <p>Anglais:  (B2)</p>
                            <p>Français: (B2)</p>
                            <p>Swahili:  (B2)</p>
                        </div>
                    </div>
    
                  
                    <div class="right_side">
                       
                        <div class="works">
                            <h3 class="upper t-danger">Expériences</h3>
                            <div class="work">
                                <h5 class="upper">Linda Hotel, Goma - RD Congo.</h5>
                                <h4> Développeur odoo</h4>
                                <p> Jan 2022 - Mars 2022 </p>
                                <ul>
                                    <li> Développement et customisation des modules tiers odoo pour la gestion d'hôtel;</li>
                                    <li>Configuration du serveur VPS et déploiement en ligne du système.</li>
                                </ul>
                            </div>
                            <div class="work">
                                <h5 class="upper">Planet Hotel, Goma - RD Congo.</h5>
                                <h4> Développeur web</h4>
                                <p> Sept 2021 - Déc 2021 </p>
                                <ul>
                                    <li>Conception et design du site internet <strong>(planethotelgoma.net)</strong></li>
                                    <li>Configuration des adresses email professionelles</li>
                                </ul>
                            </div>
                        </div>
                      
                        <div class="works">
                            <h3 class="upper t-danger">éducation</h3>
                            <div class="work">
                                <h5 class="upper">U.L.K | Gisenyi, Rwanda.</h5>
                                <h4> BS: Computer Science</h4>
                                <p> 2017 - 2021 </p>
                                <ul>
                                    <li>DBMS, Networking, Programming, ICT Skills, MS Office, Computer hardware, Platform technologies, electronics, etc.</li>
                                </ul>
                            </div>
                            <div class="work">
                                <h5 class="upper">Institut Maendeleo | Goma, RD Congo.</h5>
                                <h4>Diplôme d'État: Latin et philosophie</h4>
                                <p> 2010 - 2017 </p>
                            </div>
                        </div>
                        <div class="works">
                            <h3 class="upper t-danger">CERTIFICATIONS</h3>
                            <div class="work">
                                <h4 class="t-dark">Responsive Web Design.</h4>
                                <p> Avril 2022 - FreeCodeCamp.org</p>
                            </div>
                            <div class="work">
                                <h4 class="t-dark">Devenir développeur / développeuse web full-stack</h4>
                                <p> Oct 2021 - LinkedIn Learning, <strong>ID: AfZYfMKyO6tlWz-PunBe7ajA2u_u</strong></p>
                                
                            </div>
                            <div class="work">
                                <h4 class="t-dark">Devenir développeur / développeuse React</h4>
                                <p> Oct 2021 - LinkedIn Learning, <strong>ID: AXBkV2swGFgjH1-tl68-gyYyHAwm</strong></p>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
          </main>
        </div>
      );
}