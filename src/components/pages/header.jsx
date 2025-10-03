import React, { useState, useEffect, useMemo } from 'react';
// --- IMPORT NEW CONTENT COMPONENTS HERE ---
import Home from './Home.jsx'; // Import the new Home content

// Placeholder for future components
const Learners = () => (
    <div className="text-center p-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <h2 className="text-xl font-semibold text-indigo-600">Learners Module</h2>
        <p className="text-gray-500">Content for the Learners management page goes here.</p>
    </div>
);
const DefaultPlaceholder = ({ activeItemName }) => (
    <div className="text-center p-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <h2 className="text-xl font-semibold text-gray-700">{activeItemName}</h2>
        <p className="text-gray-500">This section is currently under construction.</p>
    </div>
);
// ------------------------------------------


// --- SIMULATED ROUTER HOOK ---
// This simulates React Router's useLocation for standalone execution.
// In a real project, you would replace this with imports from 'react-router-dom'.
const useSimulatedRouteLocation = (defaultPath = '/dashboard/home') => {
    const [path, setPath] = useState(defaultPath);

    const changePath = (newPath) => {
        if (typeof window !== 'undefined' && window.history) {
            // Mimic browser history update
            window.history.pushState({}, '', newPath);
        }
        setPath(newPath);
    };

    useEffect(() => {
        const handlePopState = () => {
            setPath(window.location.pathname);
        };
        // Set initial path on load
        setPath(window.location.pathname.startsWith('/dashboard') ? window.location.pathname : defaultPath);

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    return { pathname: path, changePath };
};

// --- Icon Components (Using lucide-react style SVGs) ---
const Icon = ({ children, className = "w-5 h-5", strokeWidth = "1.5" }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {children}
    </svg>
);

// Recreated icons based on the new visual style (mostly filled or bolder lines)
const HomeIcon = (props) => (<Icon {...props}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></Icon>);
const TrainingInstitutesIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-1 4h1" /></Icon>);
const InstructorsIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></Icon>);
const LearnersIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" /></Icon>);
const ApplicationsIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7h-4a2 2 0 00-2 2v10a2 2 0 002 2h4a2 2 0 002-2V9a2 2 0 00-2-2zM4 5h8M4 9h8m-8 4h8m-8 4h8" /></Icon>);
const AssessmentIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.636-4.364a9 9 0 11-12.728 0m12.728 0L21 7" /></Icon>);
const QuestionBankIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.838a9 9 0 01.303-1.638M18 10a8 8 0 11-16 0 8 8 0 0116 0z" /></Icon>);
const FormsIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></Icon>);
const CalendarIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h.01M12 11h.01M15 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></Icon>);
const NotificationsIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.405L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></Icon>);
const AnnouncementsIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.82 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.82 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.82-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.82-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></Icon>);
const ProfileIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></Icon>);
const ConfigurationIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.82 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.82 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.82-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.82-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></Icon>);
const LogoutIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></Icon>);
const BellIcon = (props) => (<Icon {...props} strokeWidth="1.7"><path d="M10 5a2 2 0 014 0v1h-4V5zm-4 5h12v11H6V10zm0-1h12V9H6v1zM18 5c0-1.657-1.343-3-3-3S12 3.343 12 5V7H6v14h12V7h-6V5c0-.552.448-1 1-1s1 .448 1 1v2h2V5z" /></Icon>); // A more filled notification icon

// --- Sidebar Data Structure (Mapping name to URL path) ---
const navItems = [
    { name: 'Home', path: 'home', icon: HomeIcon, section: 'main' },
    { name: 'Training institutes', path: 'training-institutes', icon: TrainingInstitutesIcon, section: 'main' },
    { name: 'Instructors', path: 'instructors', icon: InstructorsIcon, section: 'main' },
    { name: 'Learners', path: 'learners', icon: LearnersIcon, section: 'main' },
    { name: 'Applications', path: 'applications', icon: ApplicationsIcon, section: 'main' },
    { name: 'Assessment', path: 'assessment', icon: AssessmentIcon, section: 'main' },
    { name: 'Question bank', path: 'question-bank', icon: QuestionBankIcon, section: 'main' },
    { name: 'Forms', path: 'forms', icon: FormsIcon, section: 'main' },
    { name: 'Calendar', path: 'calendar', icon: CalendarIcon, section: 'main' },
    { name: 'Notifications', path: 'notifications', icon: NotificationsIcon, section: 'main' },
    { name: 'Announcements', path: 'announcements', icon: AnnouncementsIcon, section: 'main' },
    // Separator
    { name: 'Profile', path: 'profile', icon: ProfileIcon, section: 'user' },
    { name: 'Configuration', path: 'configuration', icon: ConfigurationIcon, section: 'user' },
    { name: 'Log out', path: 'log-out', icon: LogoutIcon, section: 'user' },
];

// --- Sidebar Component ---
const Sidebar = ({ activePath, navigateToPath }) => {
    const mainItems = navItems.filter(item => item.section === 'main');
    const userItems = navItems.filter(item => item.section === 'user');

    const renderLink = (item) => {
        const isActive = activePath === item.path;
        const isLogOutLink = item.name === 'Log out';

        // Styling updated to match the clear, modern design from the image
        const activeClasses = 'bg-indigo-50 text-indigo-700 font-semibold';
        const inactiveClasses = isLogOutLink
            ? 'text-gray-500 hover:bg-gray-50'
            : 'text-gray-700 hover:bg-gray-50';

        const iconColor = isActive ? 'text-indigo-700' : 'text-gray-500';

        const handleClick = () => {
            // Simulated navigation to the new URL path
            navigateToPath(`/dashboard/${item.path}`);
        };

        return (
            <div
                key={item.name}
                className={`
                    flex items-center space-x-3 p-3 rounded-lg cursor-pointer 
                    transition-colors duration-150 ease-in-out text-sm
                    ${isActive ? activeClasses : inactiveClasses}
                `}
                onClick={handleClick}
            >
                {/* Conditionally fill/stroke the icon to match the active state */}
                <item.icon
                    className={`w-5 h-5 ${iconColor}`}
                    // Home has a filled icon look in the image when active
                    fill={isActive && item.name === 'Home' ? 'currentColor' : 'none'}
                />
                <span className="text-sm">{item.name}</span>
            </div>
        );
    };

    return (
        // Sidebar Container - Clean white background, subtle border
        <div className="flex flex-col w-64 bg-white border-r border-gray-200 fixed top-0 left-0 h-full p-4 z-30 transform -translate-x-full lg:translate-x-0 transition-transform duration-300">

            {/* Logo/Header */}
            <div className="flex items-center px-2 mb-8">
                {/* Placeholder for the 'enum' logo - Dark purple text with a distinct icon */}
                <div className="flex items-center text-2xl font-bold text-indigo-700">
                    <svg className="w-8 h-8 mr-1 text-indigo-700 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15h3V9h-3v8z" fill="none"/>
                        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
                        <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm.5 13h-1V7h2v10z"/>
                    </svg>
                    <span className="text-indigo-900">enum</span>
                </div>
            </div>

            {/* Main Navigation Group */}
            <div className="flex-1 space-y-1">
                {mainItems.map(renderLink)}
            </div>

            {/* User/Settings Group (separated by a border) */}
            <div className="pt-4 mt-auto border-t border-gray-100 space-y-1">
                {userItems.map(renderLink)}
            </div>
        </div>
    );
};

// --- Main Content Component ---
// This component now acts as the Router/Switch for the dashboard content
const DashboardContent = ({ activePathSegment, activeItemName }) => {
    let ContentComponent;

    switch (activePathSegment) {
        case 'home':
            ContentComponent = Home;
            break;
        case 'learners':
            ContentComponent = Learners;
            break;
        // Add other cases here as you create new files (e.g., 'instructors', 'applications', etc.)
        default:
            ContentComponent = () => <DefaultPlaceholder activeItemName={activeItemName} />;
            break;
    }

    return (
        <div className="flex-1 p-8 sm:p-12">
            {/* We can optionally hide the title if the content component already has one */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {activeItemName}
            </h1>
            <div className="min-h-[60vh]">
                <ContentComponent />
            </div>
        </div>
    );
}

// --- App Component (Main Layout) ---
const App = () => {
    // 1. Get the current path from the simulated router
    const { pathname, changePath } = useSimulatedRouteLocation();

    // 2. Derive the active path segment (e.g., 'home' from '/dashboard/home')
    const pathSegment = useMemo(() => {
        const parts = pathname.split('/').filter(p => p);
        return parts.length > 1 && parts[0] === 'dashboard' ? parts[1] : 'home';
    }, [pathname]);

    // 3. Find the corresponding item name for display
    const activeItem = useMemo(() => {
        const found = navItems.find(item => item.path === pathSegment);
        return found ? found.name : 'Home';
    }, [pathSegment]);

    // State for responsive sidebar toggle on mobile
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar (Fixed on desktop, toggled on mobile) */}
            <div
                className={`
                    fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 z-40 
                    lg:relative lg:translate-x-0 transition-transform duration-300
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <Sidebar
                    activePath={pathSegment}
                    navigateToPath={(newPath) => {
                        changePath(newPath); // Updates the 'URL'
                        setIsSidebarOpen(false); // Close sidebar after selection on mobile
                    }}
                />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 lg:ml-64 transition-all duration-300">

                {/* Top Bar/Navbar - The Header Implementation */}
                <header className="sticky top-0 z-20 flex items-center justify-between h-16 bg-white border-b border-gray-200 shadow-sm px-4 sm:px-6">
                    {/* Hamburger Button (Mobile Only) */}
                    <button
                        className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                        onClick={toggleSidebar}
                        aria-label="Toggle navigation"
                    >
                        {/* Hamburger Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Page Title (Only visible on mobile when sidebar is closed) - or use Breadcrumbs */}
                    <div className="lg:hidden text-lg font-semibold text-gray-800 flex-1">
                        {activeItem}
                    </div>

                    {/* Right side: Notifications and Profile */}
                    <div className="flex items-center space-x-4 ml-auto">

                        {/* Notification Button */}
                        <button className="relative p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                            aria-label="Notifications"
                            onClick={() => console.log('Show notifications')}
                        >
                            <BellIcon className="w-6 h-6" />
                            {/* Unread dot indicator */}
                            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500" />
                        </button>

                        {/* Profile Area */}
                        <div className="flex items-center space-x-2 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors">
                            <span className="text-sm font-medium text-gray-700 hidden sm:inline">David</span>
                            {/* Avatar Placeholder */}
                            <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-800 font-semibold text-base shadow-sm">
                                D
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content - Renders based on the path */}
                <DashboardContent
                    activePathSegment={pathSegment}
                    activeItemName={activeItem}
                />
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-gray-900 opacity-50 z-30 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default App;
