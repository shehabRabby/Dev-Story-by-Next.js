import Title from "@/Component/Title";
import React from "react";

const TutorialPages = async ({ params }) => {
  const { slug } = await params;
  const [technology, topic, , page_no, subject] = slug || [];
  return (
    <div>
      <h3 className="p-3 bg-sky-50 mb-5">
        This is the Tutorial Pages component. You can add your content here
        based on the technology, topic, page number, and subject.
      </h3>
      <Title>{technology} tutorials</Title>
      <div className="p-5">
        <p>Subject: {subject}</p>
        <div className="flex justify-between">
          <h2>Topic: {topic}</h2>
          <p>page: {page_no}</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default TutorialPages;
