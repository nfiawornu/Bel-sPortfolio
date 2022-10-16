 

const Helper = (id) => {
    const element = document.getElementById(id);
    console.log(id);
  return element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  
}

export default Helper
