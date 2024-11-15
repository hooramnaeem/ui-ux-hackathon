// src/app/pages/missions.tsx
import InfoSection from '../components/InfoSection';

const MissionsPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <InfoSection
        imageSrc="/images/space-mission.jpg" // Ensure the image is stored correctly in the public/images folder
        altText="Space Mission Image"
        title="Space Missions: Past, Present, and Future"
        description="From satellites to manned missions, space exploration has been at the forefront of technological advancement. This section highlights significant milestones in the history of space missions, focusing on the technology and human courage that made it possible."
        year="2024"
        role="Exploration Specialist"
      />

      {/* Add more InfoSection components as needed for other missions */}
    </div>
  );
};

export default MissionsPage;


