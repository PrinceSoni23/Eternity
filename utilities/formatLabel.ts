export const formatLabel = (dateTime: string | Date, filter: string): string => {
    const date = new Date(dateTime);
  
    switch (filter) {
      case "hourly":
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  
      case "daily":
        return date.toLocaleDateString([], { day: "2-digit", month: "short" });
  
      case "weekly":
        const weekStart = new Date(date);
        const day = weekStart.getUTCDay();
        const diff = day === 0 ? -6 : 1 - day; 
        weekStart.setUTCDate(weekStart.getUTCDate() + diff);
        weekStart.setUTCHours(0, 0, 0, 0);
        // like "Week of 15 Apr"
        return `Week of ${weekStart.toLocaleDateString([], { day: '2-digit', month: 'short' })}`;
  
      case "monthly":
        return date.toLocaleDateString([], { month: "short", year: "numeric" });
  
      case "yearly":
        return date.getFullYear().toString();
  
      default:
        return date.toLocaleString();
    }
  };
  