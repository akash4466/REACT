const orders = [{clicks: 5}, {clicks: 10}]; const totalClicks = orders.reduce((sum, o) => sum + o.clicks, 0);
