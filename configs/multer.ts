import multer from "multer";

const storage = multer.diskStorage({})

const upolad = multer({storage})

export default upolad;