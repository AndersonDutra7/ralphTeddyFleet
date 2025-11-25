import { supabase } from "../services/supabase";

export async function testarConexao() {
  try {
    const { data, error } = await supabase
      .from("veiculos")
      .select("*")
      .limit(1);

    if (error) {
      console.log("Error ao consultar o Supabase", error);
      return { ok: false, error };
    }

    console.log("Conexão estabelecida com sucesso!", data);
    return { ok: true, data };
  } catch (err) {
    console.log("Erro inesperado", err);
    return { ok: false, err };
  }
}
