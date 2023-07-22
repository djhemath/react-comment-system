import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

import CommentSystem from ".";

test("it should render successfully", () => {
    render(<CommentSystem />);
});