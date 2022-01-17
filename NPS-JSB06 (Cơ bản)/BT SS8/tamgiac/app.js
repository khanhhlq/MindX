
document.write(".............................................")
document.write("</br>")

for (let i = 1; i < 6; i++){
    for (let j = i; j < 8; j++){
      document.write("...")
    }

    for (let j = 1; j <= (2 * i - 1); j++){
        document.writeln("*");
    }

    for (let j = i; j < 8; j++){
        document.write("...")
    }
    document.write("</br>")
}
document.write(".............................................")
