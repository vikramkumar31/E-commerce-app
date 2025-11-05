'use client';

import { useState } from 'react';

const Sidebar = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  priceRange, 
  onPriceRangeChange,
  searchQuery,
  onSearchChange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8M4 18h16" />
          </svg>
          Filters
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        lg:block bg-white rounded-lg shadow-md p-6
        ${isOpen ? 'block' : 'hidden'}
        lg:sticky lg:top-24
      `}>
        {/* Search */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Search</h3>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="mr-2 text-blue-600"
                />
                <span className="text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Price Range</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Min Price</label>
              <input
                type="number"
                min="0"
                placeholder="0"
                value={priceRange.min}
                onChange={(e) => onPriceRangeChange({ ...priceRange, min: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Max Price</label>
              <input
                type="number"
                min="0"
                placeholder="1000"
                value={priceRange.max}
                onChange={(e) => onPriceRangeChange({ ...priceRange, max: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="pt-2">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange.max || 500}
                onChange={(e) => onPriceRangeChange({ ...priceRange, max: e.target.value })}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$0</span>
                <span>$500+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Rating</h3>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 text-blue-600"
                />
                <div className="flex items-center">
                  {[...Array(rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">& up</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => {
            onCategoryChange('All Categories');
            onPriceRangeChange({ min: '', max: '' });
            onSearchChange('');
          }}
          className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
        >
          Clear Filters
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
