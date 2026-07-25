import React from 'react';
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'; //enables to use tobe functions
import Hero from '../landing_page/home/Hero';
import heroImg from '../assets/media/homeHero.png';

// Test Suite
describe('Hero Component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('Hero Image');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', heroImg);
  });
});