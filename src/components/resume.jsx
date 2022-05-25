import React, { useContext, useEffect, useRef } from "react";

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import { UserContext } from "../contexts/User.context";
import Templates from "./templates";
import "../css/main.css";

export default function Resume(props) { 

    const { userModel } = useContext(UserContext);
    const resumeRef = useRef(null);

    //Desctrure UserModel
    const { personal, contact, skills, work, education, certification} = userModel;
    
    //Destructure personal object
    const {  firstname, lastname, jobposition, objective } = personal;
    
    //Destructure contact Object
    const {  email, phonenumber, address, url } = contact;
    

    const handleDownloadPdf = async () => {
        const element = resumeRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
    
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

        console.log(userModel);
    
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };


    return (
        <React.Fragment>
            <Templates />
            <div className="downloads">
                <button className="button b-blue" onClick={handleDownloadPdf}>
                    <span className="fa fa-download b-none"></span>
                    Download CV
                </button>
            </div>
            <div className="resume" ref={resumeRef}>
                <header>
                    <div className="container">
                        <div className="row">
                            
                            <div className="left_side">
                                <div className="row">
                                    <div className="h_image">
                                        <img src="./src/i.png" alt="" width="80"/>
                                    </div>
                                    <div className="h_objectif">
                                        <h1 className="t-white">{firstname} {lastname}</h1>
                                        <h3 className="t-white">{jobposition}</h3>
                                        <p className="t-white">{objective}</p>
                                    </div>
                                </div>
                            </div>
            
                        </div>
                    </div>
                </header>
        
                <main>
                    <div className="container">
                        <div className="row">
                    
                            <div className="side_left">
                                <div className="left_block">
                                    <h3 className="t-danger">CONTACT</h3>
                                    <p><span className="fa fa-envelope"></span> graciaskas96@gmail.com </p>
                                    <p><span className="fa fa-phone"></span> (243) 978 092 058 </p>
                                    <p><span className="fa fa-map-marker"></span>N.48, Gombe - Kin </p>
                                </div>
                                <div className="left_block">
                                    <h3 className="t-danger upper">Compétences</h3>
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
                                <div className="left_block">
                                    <h3 className="t-danger upper">LANGUAGES</h3>
                                    <p>Anglais:  (B2)</p>
                                    <p>Français: (B2)</p>
                                    <p>Swahili:  (B2)</p>
                                </div>
                            </div>
        
                    
                            <div className="right_side">
                        
                                <div className="works">
                                    <h3 className="upper t-danger">Expériences</h3>
                                    <div className="work">
                                        <h5 className="upper">Linda Hotel, Goma - RD Congo.</h5>
                                        <h4> Développeur odoo</h4>
                                        <p> Jan 2022 - Mars 2022 </p>
                                        <ul>
                                            <li> Développement et customisation des modules tiers odoo pour la gestion d'hôtel;</li>
                                            <li>Configuration du serveur VPS et déploiement en ligne du système.</li>
                                        </ul>
                                    </div>
                                    <div className="work">
                                        <h5 className="upper">Planet Hotel, Goma - RD Congo.</h5>
                                        <h4> Développeur web</h4>
                                        <p> Sept 2021 - Déc 2021 </p>
                                        <ul>
                                            <li>Conception et design du site internet <strong>(planethotelgoma.net)</strong></li>
                                            <li>Configuration des adresses email professionelles</li>
                                        </ul>
                                    </div>
                                </div>
                        
                                <div className="works">
                                    <h3 className="upper t-danger">éducation</h3>
                                    <div className="work">
                                        <h5 className="upper">U.L.K | Gisenyi, Rwanda.</h5>
                                        <h4> BS: Computer Science</h4>
                                        <p> 2017 - 2021 </p>
                                        <ul>
                                            <li>DBMS, Networking, Programming, ICT Skills, MS Office, Computer hardware, Platform technologies, electronics, etc.</li>
                                        </ul>
                                    </div>
                                    <div className="work">
                                        <h5 className="upper">Institut Maendeleo | Goma, RD Congo.</h5>
                                        <h4>Diplôme d'État: Latin et philosophie</h4>
                                        <p> 2010 - 2017 </p>
                                    </div>
                                </div>

                                <div className="works">
                                    <h3 className="upper t-danger">CERTIFICATIONS</h3>
                                    <div className="work">
                                        <h4 className="t-dark">Responsive Web Design.</h4>
                                        <p> Avril 2022 - FreeCodeCamp.org</p>
                                    </div>
                                    <div className="work">
                                        <h4 className="t-dark">Devenir développeur / développeuse web full-stack</h4>
                                        <p> Oct 2021 - LinkedIn Learning, <strong>ID: AfZYfMKyO6tlWz-PunBe7ajA2u_u</strong></p>
                                        
                                    </div>
                                    <div className="work">
                                        <h4 className="t-dark">Devenir développeur / développeuse React</h4>
                                        <p> Oct 2021 - LinkedIn Learning, <strong>ID: AXBkV2swGFgjH1-tl68-gyYyHAwm</strong></p>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}