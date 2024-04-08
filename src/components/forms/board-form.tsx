'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { useCreateBoard } from '@/hooks/use-api';
import { useDialogStore } from '@/hooks/use-dialog-store';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

import type { BoardWithColumns } from '@/types/board.types';

interface Props {
  formData?: BoardWithColumns;
}

const formSchema = z.object({
  name: z.string().min(1, '!'),
  columns: z
    .array(
      z.object({
        name: z.string(),
      }),
    )
    .optional(),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultValues: FormSchema = {
  name: '',
  columns: [{ name: 'Todo' }, { name: 'Doing' }, { name: 'Done' }],
};

export default function BoardForm({ formData }: Props) {
  const router = useRouter();

  const { onClose } = useDialogStore();

  const form = useForm<FormSchema>({
    defaultValues: formData ?? defaultValues,
    resolver: zodResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray<FormSchema>({
    name: 'columns',
    control: form.control,
  });

  const { mutate } = useCreateBoard<FormSchema>();

  const onSubmit = async (values: FormSchema) => {
    mutate(values, {
      onSuccess: () => {
        toast.success('The task has been added successfully!');
        onClose();
        router.refresh();
      },
      onError: () => {
        toast.error('Something went wrong. Please try again later!');
        onClose();
        router.refresh();
      },
    });
  };

  return (
    <Form {...form}>
      <form
        id="board-form"
        name="board-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. Todo" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-3">
          {fields.map((field, index) => (
            <FormField
              key={field.id}
              control={form.control}
              name={`columns.${index}.name`}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    Columns
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-4">
                      <Input {...formField} />
                      <button
                        type="button"
                        aria-label="remove"
                        onClick={() => remove(index)}
                      >
                        <X />
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            className="w-full"
            onClick={() => append({ name: '' })}
          >
            + Add New Column
          </Button>
        </div>
      </form>
    </Form>
  );
}
