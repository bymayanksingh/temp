import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../shared/Container';
import { Github, GitBranch, GitPullRequest, Star } from 'lucide-react';

const stats = [
  { icon: Github, label: 'Repositories', value: '50+' },
  { icon: Star, label: 'GitHub Stars', value: '200+' },
  { icon: GitPullRequest, label: 'Pull Requests', value: '500+' },
  { icon: GitBranch, label: 'Contributions', value: '1,000+' },
];

export function GithubStats() {
  return (
    <Container>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl" />
        <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Open Source Contributions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Actively contributing to the developer community through open source projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}