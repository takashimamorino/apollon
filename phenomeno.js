// $: note("[gb5 ~ a5 e5 d5 [e5 gb5] [db5 a4] ~ b4 [db5 d5] a5 e5 d5 [e5 gb5] db6 a5]/3.2").s("piano")
// .transpose("<12>")
// $: note("[gb5 ~ a5 e5 d5 [e5 gb5] [db5 a4] ~ b4 [db5 d5] a5 e5 d5 [e5 gb5] [db6 d6] [db6 a5]]/3.2").s("piano")
// .transpose("<12>")

$: note("<[gb5 ~ a5 e5 d5 [e5 gb5] [db5 a4] ~ b4 [db5 d5] a5 e5 d5 [e5 gb5] db6 a5] [gb5 ~ a5 e5 d5 [e5 gb5] [db5 a4] ~ b4 [db5 d5] a5 e5 d5 [e5 gb5] [db6 d6] [db6 a5]]>/3.2")
  .s("piano")
  .transpose("<12>")

$: note("[g2 b2] [d3 g3] ~ ~ [a2 db3][e3 a3] ~ ~ [b2 d3][gb3 b3] ~ ~ [gb2 db3][e3 db4] ~ ~").slow(3.2).s("piano").gain(0.3)
.transpose("<12>")
$: note("[[~ db4] [~] [d4] [db4] [~ db4] [~] [d4] [db4] [~ db4] [~] [d4] [db4] [~ db4] [~] [d4] [e4*3]]/3.2").s("gm_church_organ")
