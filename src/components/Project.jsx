import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const FaChevronLeft = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 320 512'
    fill='currentColor'
  >
    <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
  </svg>
);

const FaChevronRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 320 512'
    fill='currentColor'
  >
    <path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5-12.5-32.8-12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
  </svg>
);

const FaArrowRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 448 512'
    fill='currentColor'
  >
    <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
  </svg>
);

const Project = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length,
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length,
    );
  };

  return (
    <div className='project-card'>
      <div className='project-image-container' onClick={openModal}>
        <img
          src={`/project-images/${project.images[currentImageIndex]}`}
          alt={`${project.title} thumbnail`}
          className='project-image'
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          onError={(e) => {
            console.error(`Failed to load thumbnail for ${project.title}`);
          }}
        />
        {project.images.length > 1 && (
          <>
            <button
              className='thumbnail-nav prev'
              onClick={prevImage}
              aria-label='Previous image'
            >
              <FaChevronLeft />
            </button>
            <button
              className='thumbnail-nav next'
              onClick={nextImage}
              aria-label='Next image'
            >
              <FaChevronRight />
            </button>
            <div className='image-count'>
              {currentImageIndex + 1}/{project.images.length}
            </div>
          </>
        )}
      </div>

      <div className='project-content'>
        <h3 className='project-title'>{project.title}</h3>
        <p className='project-description'>{project.description}</p>
        <ul className='project-technologies'>
          {project.technologies.map((technology, index) => (
            <li key={index} className='project-technology'>
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className='project-link-container'>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='project-link'
          >
            <span className='project-link-text'>View Code</span>
            <FaArrowRight />
          </a>
        )}
        {project.projectLink && (
          <a
            href={project.projectLink}
            target='_blank'
            rel='noopener noreferrer'
            className='project-link'
          >
            <span className='project-link-text'>View Project</span>
            <FaArrowRight />
          </a>
        )}
      </div>

      {isModalOpen && (
        <div
          className='modal'
          onClick={closeModal}
          role='dialog'
          aria-modal='true'
        >
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button
              className='close'
              onClick={closeModal}
              aria-label='Close modal'
            ></button>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                hideOnClick: false,
              }}
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              initialSlide={currentImageIndex}
              onSlideChange={(swiper) =>
                setCurrentImageIndex(swiper.activeIndex)
              }
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className='modal-image-container'>
                    <img
                      src={`/project-images/${image}`}
                      alt={`${project.title} - Image ${index + 1}`}
                      style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      }}
                      onError={(e) => {
                        console.error(`Failed to load image: ${image}`);
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
