//? next.js olmayan routerlar icin default 404 sayfasi sunmaktadir. 
//? Default 404 sayfasinin "not-found.js" ile override edebiliriz. 

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src="/images/404-page-not-found.png" />
    </div>
  );
}
