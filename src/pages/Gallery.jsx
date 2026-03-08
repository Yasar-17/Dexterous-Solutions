import React, { useState } from 'react';
import FadeInSection from '../components/FadeInSection.jsx';

// GALLERY IMAGES: All 6 use free Unsplash CDN URLs (industrial / data center / solar).
// For production, replace with your own project photos in /public/gallery/.
const galleryImages = [
  {
    src: 'https://ngpowersolutions.com/wp-content/uploads/2023/07/PHOTO-2023-06-30-09-40-49.jpg',
    alt: 'Modern data center server racks'
  },
  {
    src: 'https://ngpowersolutions.com/wp-content/uploads/2023/07/f0689f96-3246-4d57-87fa-e74af39cf247.jpg',
    alt: 'Engineer working on industrial equipment'
  },
  {
    src: 'https://ngpowersolutions.com/wp-content/uploads/2023/07/PHOTO-2023-06-30-09-40-53-1024x768.jpg',
    alt: 'Solar panels on industrial rooftop'
  },
  {
    src: 'https://ngpowersolutions.com/wp-content/uploads/2023/07/c58d0ca5-c47d-4a42-9250-82db25915e06.jpg',
    alt: 'Industrial power and electrical systems'
  },
  {
    src: 'https://ngpowersolutions.com/wp-content/uploads/2023/07/PHOTO-2023-06-30-09-40-44-1153x1536.jpg',
    alt: 'Data center and backup infrastructure'
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    alt: 'Field service and technical installation'
  }
];

const GalleryItem = ({ image, onClick }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Graceful placeholder if image is missing
    return (
      <button
        type="button"
        onClick={() => onClick(null)}
        className="w-full aspect-[4/3] rounded-2xl bg-slate-100 border border-dashed border-neutral-border flex items-center justify-center text-xs text-text-secondary"
      >
        {/* GALLERY IMAGES: Add your project/installation photos to public/gallery/ */}
        Image placeholder
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onClick(image)}
      className="group relative block w-full overflow-hidden rounded-2xl bg-slate-100 border border-neutral-border"
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        onError={() => setHasError(true)}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors" />
    </button>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="bg-white">
      <section className="bg-neutral-bg border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <p className="text-xs text-text-secondary mb-2">
            Home <span className="mx-1">›</span> Gallery
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold mb-3">
            Installation &amp; Project Gallery
          </h1>
          <p className="text-text-secondary max-w-2xl text-sm md:text-base">
            A glimpse of UPS installations, battery banks, and field work
            completed by the Dexterous Power Solution team.
          </p>
        </div>
      </section>

      <FadeInSection className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <GalleryItem
                key={image.src}
                image={image}
                onClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center lightbox-backdrop"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-slate-200 hover:text-white text-sm"
            >
              Close ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="lightbox-image w-full rounded-2xl object-contain bg-slate-900/60"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

