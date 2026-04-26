export const cleanString = (str: string) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace("-", "")
    .replace(/\s+/g, "-");
};

export const cleanMdDescription = (str: string) => {
  return (
    str
      .replace(/[#*`_~]/g, "") // Remove #, *, `, _, ~ (cobre negrito, itálico, listas e code)
      .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove links mantendo apenas o texto: [texto](url) -> texto
      .replace(/\s+/g, " ") // Transforma múltiplas quebras de linha ou espaços em um espaço simples
      .trim()
      .substring(0, 160) + "..."
  );
};
