<script setup>
import Mainlayout      from '@/layout/Mainlayout.vue'
import ButtonControler from '@/components/ButtonControler.vue'
import BaseButton      from '@/components/BaseButton.vue'
import FormContainer   from '@/components/FormContainer.vue'
import FormControler   from '@/components/FormControler.vue'
import FormField       from '@/components/FormField.vue'
</script>


<template>
    <Mainlayout>
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <FormContainer>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FormField label="Eingabe 1" help="Gib hier etwas ein">
                        <FormControler
                            label="Eingabe 1"
                            type="text"
                        />
                    </FormField>

                    <FormField label="Eingabe 2" help="Gib hier etwas ein">
                        <FormControler
                            label="Eingabe 2"
                            type="text"
                        />
                    </FormField>
                </div>
            </FormContainer>

        
            <FormContainer>
                <div class="flex items-center space-x-2">
                <label for="slider" class="text-gray-700">Slider:</label>
                <input
                    id="slider"
                    type="range"
                    min="0"
                    max="100"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                </div>
            </FormContainer>


            <ButtonControler>
                <BaseButton label="Standard Button" iconName="mdiCheck" primary size="medium" />
                <BaseButton label="Großer Button" iconName="mdiAccount" primary size="large" />
                <BaseButton label="Kleiner Button" iconName="mdiCamera" primary size="small" />
                <BaseButton label="Sekundärer Button" iconName="mdiAlarm" :primary="false" size="medium" />
                <BaseButton label="Anderes Icon" iconName="mdiMapMarker" primary size="medium" />
            </ButtonControler>
        </div>
    </Mainlayout>
</template>


