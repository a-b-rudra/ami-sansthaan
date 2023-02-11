import React from 'react';
import FadeCarousel from './FadeCarousel';
import { listPage } from '../components/layout/ImageData';

export const Activities = () => (
  <div>
    <FadeCarousel data={listPage} />
  </div>
)