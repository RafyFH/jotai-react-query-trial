export const fetchWhoisData = async () => {
    const response = await fetch('https://portal.qwords.com/apitest/whois.php?domain=testing123.com');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};