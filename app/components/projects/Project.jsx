'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Project = ({ project }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	const nextImage = (e) => {
		e.stopPropagation()
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
	}

	const prevImage = (e) => {
		e.stopPropagation()
		setCurrentImageIndex(
			(prevIndex) =>
				(prevIndex - 1 + project.images.length) % project.images.length
		)
	}

	return (
		<div className='project-card'>
			<div className='project-image-container' onClick={openModal}>
				<Image
					src={`/project-images/${project.images[currentImageIndex]}`}
					alt={`${project.title} thumbnail`}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					style={{ objectFit: 'cover' }}
					className='project-image'
					onError={(e) => {
						e.target.src = '/placeholder-image.png'
						console.error(`Failed to load thumbnail for ${project.title}`)
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
					<Link
						href={project.githubLink}
						target='_blank'
						rel='noopener noreferrer'
						className='project-link'
					>
						<span className='project-link-text'>View Code</span>
						<FaArrowRight className='project-link-icon' />
					</Link>
				)}
				{project.projectLink && (
					<Link
						href={project.projectLink}
						target='_blank'
						rel='noopener noreferrer'
						className='project-link'
					>
						<span className='project-link-text'>View Project</span>
						<FaArrowRight className='project-link-icon' />
					</Link>
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
										<Image
											src={`/project-images/${image}`}
											alt={`${project.title} - Image ${index + 1}`}
											fill
											style={{ objectFit: 'contain' }}
											onError={(e) => {
												e.target.src = '/placeholder-image.png'
												console.error(`Failed to load image: ${image}`)
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
	)
}

export default Project
