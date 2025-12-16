// services/veiculoService.js
import { supabase } from './supabase';

export async function listarVeiculos() {
  return supabase.from('veiculos').select('*');
}

export async function criarVeiculo(veiculo) {
  return supabase.from('veiculos').insert([veiculo]);
}

export async function editarVeiculo(id, veiculo) {
  return supabase.from('veiculos').update(veiculo).eq('id', id);
}
