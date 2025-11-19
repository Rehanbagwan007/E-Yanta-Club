import type { User, Event, Team, ProgressEntry, Resource, Notification } from "@/types";
import { PlaceHolderImages } from "./placeholder-images";

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const users: User[] = [
  { id: '1', name: 'Dr. Patil', email: 'faculty@pvpit.edu.in', avatarUrl: getImage('profile1'), role: 'faculty', skills: ['Mentorship', 'Robotics'], joinedDate: '2020-01-15' },
  { id: '2', name: 'Aarav Sharma', email: 'president@pvpit.edu.in', avatarUrl: getImage('profile2'), role: 'president', skills: ['Leadership', 'Python', 'ROS'], teamId: 'team1', joinedDate: '2022-08-20' },
  { id: '3', name: 'Priya Singh', email: 'vp@pvpit.edu.in', avatarUrl: getImage('profile3'), role: 'vp', skills: ['Management', 'C++', 'OpenCV'], teamId: 'team1', joinedDate: '2022-09-01' },
  { id: '4', name: 'Rohan Verma', email: 'core@pvpit.edu.in', avatarUrl: getImage('profile4'), role: 'core', skills: ['Arduino', 'CAD', '3D Printing'], teamId: 'team2', joinedDate: '2023-01-10' },
  { id: '5', name: 'Sneha Gupta', email: 'member@pvpit.edu.in', avatarUrl: 'https://picsum.photos/seed/105/200/200', role: 'member', skills: ['Beginner', 'Electronics'], teamId: 'team2', joinedDate: '2023-08-25' },
];

export const events: Event[] = [
  { id: 'e1', title: 'Robotics & Automation Workshop', date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), description: 'A hands-on workshop on building and programming robots.', imageUrl: getImage('event1'), tags: ['Robotics', 'Workshop'], guest: { name: 'Dr. V. Kapoor', avatarUrl: 'https://picsum.photos/seed/106/200/200' } },
  { id: 'e2', title: 'AI Hackathon 2024', date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), description: 'Compete to create innovative AI solutions.', imageUrl: getImage('event2'), tags: ['AI', 'Hackathon', 'Competition'], guest: { name: 'Mr. S. Nadella', avatarUrl: 'https://picsum.photos/seed/107/200/200' } },
  { id: 'e3', title: 'IoT for Smart Cities Seminar', date: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(), description: 'Explore the potential of IoT in urban development.', imageUrl: getImage('event3'), tags: ['IoT', 'Seminar'], guest: { name: 'Prof. A. Mehta', avatarUrl: 'https://picsum.photos/seed/108/200/200' } },
];

export const teams: Team[] = [
  { id: 'team1', name: 'Alpha Coders', description: 'Focused on competitive programming and algorithms.', members: users.filter(u => ['2', '3'].includes(u.id)), progress: 75, bgImageUrl: getImage('team_bg1') },
  { id: 'team2', name: 'Circuit Breakers', description: 'Experts in hardware, electronics, and IoT.', members: users.filter(u => ['4', '5'].includes(u.id)), progress: 50, bgImageUrl: getImage('team_bg2') },
];

export const progressEntries: ProgressEntry[] = [
  { id: 'p1', userId: '4', date: new Date().toISOString(), title: 'Completed CAD for new chassis', description: 'Designed the main body for the rover project in Fusion 360. Ready for 3D printing.', imageUrl: 'https://picsum.photos/seed/501/400/200' },
  { id: 'p2', userId: '4', date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), title: 'Tested motor drivers', description: 'Successfully tested the L298N motor drivers with the Arduino board.' },
  { id: 'p3', userId: '5', date: new Date().toISOString(), title: 'Learned about Ohm\'s Law', description: 'Finished the introductory module on basic electronics and completed the quiz.', 
    aiFeedback: {
        feedback: "Great start! Understanding the fundamentals like Ohm's Law is crucial for any electronics project. You've described your progress clearly.",
        improvementTips: "Try to apply this knowledge in a practical mini-project. For example, calculate the required resistor for an LED and build the simple circuit. This will solidify your understanding.",
        motivationalMessage: "Every expert was once a beginner. Keep up the consistent learning, and you'll be building amazing things in no time!"
    }
  },
];

export const resources: Resource[] = [
  { id: 'r1', title: 'Official Python Tutorial', type: 'pdf', category: 'Python', imageUrl: getImage('resource1'), url: '#' },
  { id: 'r2', title: 'C++ for Beginners', type: 'video', category: 'C++', imageUrl: getImage('resource2'), url: '#' },
  { id: 'r3', title: 'Intro to ROS', type: 'video', category: 'Robotics', imageUrl: 'https://picsum.photos/seed/303/400/250', url: '#' },
  { id: 'r4', title: 'OpenCV Documentation', type: 'pdf', category: 'Computer Vision', imageUrl: 'https://picsum.photos/seed/304/400/250', url: '#' },
];

export const notifications: Notification[] = [
    { id: 'n1', title: 'New Event Posted', description: 'AI Hackathon 2024 is now open for registration.', date: new Date().toISOString(), read: false },
    { id: 'n2', title: 'Progress Feedback', description: 'You have new AI feedback on your latest progress entry.', date: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), read: false },
    { id: 'n3', title: 'Welcome to E-Vision Hub!', description: 'Explore your dashboard and get started.', date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), read: true },
]
