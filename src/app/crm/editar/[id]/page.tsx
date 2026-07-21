"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase, type UserProperty } from "@/lib/supabase";
import PropertyForm from "@/components/PropertyForm";

export default function EditarImovelPage() {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<UserProperty | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const { data } = await supabase
        .from("user_properties")
        .select("*")
        .eq("id", params.id)
        .single();
      if (!data) {
        router.push("/crm");
        return;
      }
      setProperty(data);
      setLoading(false);
    }
    fetch();
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1b4332]" />
      </div>
    );
  }

  if (!property) return null;

  return <PropertyForm initialData={property} isEdit />;
}
