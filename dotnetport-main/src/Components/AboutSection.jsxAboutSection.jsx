import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="max-w-[800px] mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <p className="mb-6 text-lg leading-relaxed">
        Hi, I’m <strong>Sowmya Yalavarthi</strong>, a <strong>Data Scientist</strong> with around 
        <strong> 5 years of experience</strong> in data engineering, analytics, and applied machine learning. 
        I love turning raw data into practical insights and scalable solutions using 
        <strong> Python, SQL, PySpark, Snowflake, AWS</strong>, and modern visualization tools.
      </p>
      <p className="mb-6 text-lg leading-relaxed">
        At <strong>Capgemini</strong>, I built large-scale pipelines, migrated enterprise data from Oracle to Snowflake, 
        and developed forecasting and churn models that boosted efficiency and customer retention. 
        At <strong>TCS</strong>, I partnered with stakeholders to define sustainability KPIs, optimized ETL workflows, 
        and built real-time dashboards that cut reporting latency by 30%. Currently at <strong>Tern</strong>, I work with 
        global energy datasets—spotting patterns, forecasting trends, and delivering insights that shape 
        infrastructure planning.
      </p>
      <p className="text-lg leading-relaxed">
        I’m passionate about <strong>using data to solve real-world problems</strong>, 
        and I believe the best solutions aren’t just accurate—they’re meaningful, scalable, 
        and make life easier for the people who use them.
      </p>
    </section>
  );
};

export default AboutSection;
