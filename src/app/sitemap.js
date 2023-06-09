export default async function sitemap() {

    const routes = ["", "services", "contact", "portfolio", "services", "team"].map((route) => {
        return ({
            url: `http://localhost:3000/${route}`,
            lastModified: new Date().toISOString(),
        })
    });
    
    
    return routes;


}