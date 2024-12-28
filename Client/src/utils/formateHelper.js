const formatNumber = (num) => {
    if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + "M";
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + "k";
    }
    return num.toString();
}

const formatRelativeTime = (date) => {
    const now = new Date();
    const givenDate = new Date(date);
    const diff = now - givenDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Approximate: 30 days in a month
    const years = Math.floor(days / 365); // Approximate: 365 days in a year

    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 30) return `${days} days ago`;
    if (months < 12) return `${months} months ago`;
    return `${years} years ago`;
}

const mostLikedStories = (stories) => {

    const sortedStories = stories.sort((a, b) => {

        const likesDiff = b.likes.length - a.likes.length;
        if (likesDiff !== 0) return likesDiff;

        const commentsDiff = b.comments.length - a.comments.length;
        if (commentsDiff !== 0) return commentsDiff;

        return b.share.length - a.share.length;
    });

    return sortedStories;
}

export { mostLikedStories, formatRelativeTime, formatNumber };