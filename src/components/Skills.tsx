// src/components/Skills.tsx
import React from 'react';
import { FaAws, FaCloud, FaGithub, FaReact, FaUbuntu } from 'react-icons/fa';
import { SiJira, SiPostgresql, SiRedis, SiRubyonrails, SiCoffeescript, SiScrumalliance, SiTestinglibrary, SiApollographql, SiRedux } from 'react-icons/si';
import { VscBeaker } from 'react-icons/vsc'; 

const Skills: React.FC = () => {
  return (
    <section>
      <h2 className="h5 border-bottom pb-2 mb-3 fw-bold" style={{ color: '#000000' }}>Skills</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li><FaAws style={{ marginRight: '8px' }} /> Knowledgeable in AWS</li>
        <li> <FaCloud style={{ marginRight: '8px' }} /> Knowledgeable in Heroku</li>
        <li><VscBeaker style={{ marginRight: '8px' }} /> RSpec</li>
        <li><SiCoffeescript style={{ marginRight: '8px' }} /> CoffeeScript</li>
        <li><SiJira style={{ marginRight: '8px' }} /> Knowledgeable in Jira</li>
        <li><SiPostgresql style={{ marginRight: '8px' }} /> Postgres</li>
        <li><FaGithub style={{ marginRight: '8px' }} /> GitHub</li>
        <li><SiTestinglibrary style={{ marginRight: '8px' }} /> Test-driven development</li>
        <li><SiRedis style={{ marginRight: '8px' }} /> Redis</li>
        <li><FaUbuntu style={{ marginRight: '8px' }} /> Ubuntu</li>
        <li><FaReact style={{ marginRight: '8px' }} /> React.js</li>
        <li><SiScrumalliance style={{ marginRight: '8px' }} /> Daily Scrum</li>
        <li><SiApollographql style={{ marginRight: '8px' }} /> API</li>
        <li><SiRubyonrails style={{ marginRight: '8px' }} /> Ruby on Rails</li>
        <li><SiRedux style={{ marginRight: '8px' }} /> Agile framework</li>
        <li><span style={{ marginRight: '8px' }}>🧵</span> Reque</li>
      </ul>

    </section>
    
  );
};

export default Skills;
