
pessoas = []


for i in range(15):
    altura = float(input(f"Digite a altura da pessoa {i+1}: "))
    genero = input(f"Digite o gênero da pessoa {i+1} (Masculino/Feminino): ").strip().lower()
    pessoas.append((altura, genero))


maior_altura = max(p[0] for p in pessoas)
menor_altura = min(p[0] for p in pessoas)
altura_masculino = [p[0] for p in pessoas if p[1] == 'masculino']
numero_feminino = sum(1 for p in pessoas if p[1] == 'feminino')


media_altura_masculino = sum(altura_masculino) / len(altura_masculino) if altura_masculino else 0


print(f"Maior altura do grupo: {maior_altura}")
print(f"Menor altura do grupo: {menor_altura}")
print(f"Média de altura das pessoas do gênero masculino: {media_altura_masculino}")
print(f"Número de pessoas do gênero feminino: {numero_feminino}")