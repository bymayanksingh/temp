import React from 'react';
import { Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const colorOptions = [
  { name: 'Blue', value: 'blue' },
  { name: 'Purple', value: 'purple' },
  { name: 'Green', value: 'green' },
  { name: 'Red', value: 'red' },
];

const fontOptions = [
  { name: 'Inter', value: 'Inter' },
  { name: 'Poppins', value: 'Poppins' },
  { name: 'Roboto', value: 'Roboto' },
];

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { config, updateConfig } = useTheme();

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Settings className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4"
          >
            <h4 className="text-lg font-semibold mb-4">Customize Theme</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Primary Color</label>
                <div className="grid grid-cols-4 gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => updateConfig({ primaryColor: color.value })}
                      className={`w-8 h-8 rounded-full bg-${color.value}-500 ${
                        config.primaryColor === color.value ? 'ring-2 ring-offset-2' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Secondary Color</label>
                <div className="grid grid-cols-4 gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => updateConfig({ secondaryColor: color.value })}
                      className={`w-8 h-8 rounded-full bg-${color.value}-500 ${
                        config.secondaryColor === color.value ? 'ring-2 ring-offset-2' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Font Family</label>
                <select
                  value={config.fontFamily}
                  onChange={(e) => updateConfig({ fontFamily: e.target.value })}
                  className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                >
                  {fontOptions.map((font) => (
                    <option key={font.value} value={font.value}>
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}