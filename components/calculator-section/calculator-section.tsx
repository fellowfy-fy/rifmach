import React from 'react';
import { Calculator } from '../shared/Calculator/Calculator';

interface Props {
    className?: string;
}

export const CalculatorSection: React.FC<Props> = () => {
  return (
    <div>
        <Calculator />
    </div>
  );
};