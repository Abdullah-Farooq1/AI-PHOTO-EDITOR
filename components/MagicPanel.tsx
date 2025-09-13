/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { MagicWandIcon } from './icons';

interface MagicPanelProps {
  onRemoveBackground: () => void;
  isLoading: boolean;
}

const MagicPanel: React.FC<MagicPanelProps> = ({ onRemoveBackground, isLoading }) => {
  return (
    <div className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex flex-col gap-4 animate-fade-in backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-center text-gray-300">Magic Tools</h3>
      <div className="flex justify-center">
        <button
          onClick={onRemoveBackground}
          disabled={isLoading}
          className="w-full max-w-xs flex items-center justify-center text-center bg-white/10 border border-transparent text-gray-200 font-semibold py-3 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-white/20 hover:border-white/20 active:scale-95 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MagicWandIcon className="w-5 h-5 mr-2" />
          Remove Background
        </button>
      </div>
    </div>
  );
};

export default MagicPanel;
